import React, { useEffect, useState } from 'react';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment
} from "firebase/firestore";

import { db } from '@site/src/utils/firebase';
import { getUserId } from '@site/src/utils/getUserId';
import styles from './CodeFeedback.module.css';

export default function CodeFeedback({ nodeId }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState(null);
  const [loading, setLoading] = useState(true);

  const userId = getUserId();
  const ref = doc(db, "feedback", nodeId);

  // LOAD DATA
  useEffect(() => {
    const load = async () => {
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        await setDoc(ref, {
          likes: 0,
          dislikes: 0
        });
      } else {
        const data = snap.data();
        setLikes(data.likes || 0);
        setDislikes(data.dislikes || 0);
      }

      // load user vote
      const voteSnap = await getDoc(doc(db, "feedback", nodeId, "votes", userId));

      if (voteSnap.exists()) {
        setUserVote(voteSnap.data().vote);
      }

      setLoading(false);
    };

    load();
  }, [nodeId]);

  // VOTE FUNCTION (FIXED)
  const vote = async (type) => {
    const voteRef = doc(db, "feedback", nodeId, "votes", userId);
    const snap = await getDoc(voteRef);

    const previousVote = snap.exists() ? snap.data().vote : null;

    // If same vote, do nothing
    if (previousVote === type) return;

    const updates = {};

    // remove previous vote
    if (previousVote === "like") {
      updates.likes = increment(-1);
    }
    if (previousVote === "dislike") {
      updates.dislikes = increment(-1);
    }

    // add new vote
    if (type === "like") {
      updates.likes = increment(1);
    }
    if (type === "dislike") {
      updates.dislikes = increment(1);
    }

    // IMPORTANT: only update if needed
    if (Object.keys(updates).length > 0) {
      await updateDoc(ref, updates);
    }

    // store user vote
    await setDoc(voteRef, { vote: type });

    // update UI safely
    setLikes(prev => {
      let value = prev;
      if (previousVote === "like") value--;
      if (type === "like") value++;
      return value;
    });

    setDislikes(prev => {
      let value = prev;
      if (previousVote === "dislike") value--;
      if (type === "dislike") value++;
      return value;
    });

    setUserVote(type);
  };

  if (loading) {
    return <div className={styles.feedbackContainer}>Loading...</div>;
  }

  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.reactions}>

        <button
          onClick={() => vote("like")}
          className={`${styles.likeBtn} ${userVote === "like" ? styles.active : ""}`}
        >
          👍 Like <span className={styles.count}>{likes}</span>
        </button>

        <button
          onClick={() => vote("dislike")}
          className={`${styles.dislikeBtn} ${userVote === "dislike" ? styles.active : ""}`}
        >
          👎 Dislike <span className={styles.count}>{dislikes}</span>
        </button>

      </div>

      <p className={styles.votedMessage}>
        Your vote is saved globally per device.
      </p>
    </div>
  );
}
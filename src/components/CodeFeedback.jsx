import React, { useState, useEffect } from 'react';
import { 
  doc, 
  onSnapshot, 
  setDoc, 
  increment,
  getDoc 
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
  const feedbackRef = doc(db, "feedback", nodeId);
  const userVoteRef = doc(db, "feedback", nodeId, "votes", userId);

  // Real-time Live Updates
  useEffect(() => {
    // Listen to main feedback counts
    const unsubscribeFeedback = onSnapshot(feedbackRef, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setLikes(data.likes || 0);
        setDislikes(data.dislikes || 0);
      }
    });

    // Listen to user's vote
    const unsubscribeVote = onSnapshot(userVoteRef, (snap) => {
      setUserVote(snap.exists() ? snap.data().vote : null);
      setLoading(false);
    });

    return () => {
      unsubscribeFeedback();
      unsubscribeVote();
    };
  }, [nodeId]);

  const vote = async (type) => {
    try {
      const currentVoteSnap = await getDoc(userVoteRef);
      const previousVote = currentVoteSnap.exists() ? currentVoteSnap.data().vote : null;

      if (previousVote === type) return;

      const updates = {};

      // Remove previous vote
      if (previousVote === "like") updates.likes = increment(-1);
      if (previousVote === "dislike") updates.dislikes = increment(-1);

      // Add new vote
      if (type === "like") updates.likes = increment(1);
      if (type === "dislike") updates.dislikes = increment(1);

      if (Object.keys(updates).length > 0) {
        await setDoc(feedbackRef, updates, { merge: true });
      }

      // Save user vote
      await setDoc(userVoteRef, { vote: type });
      setUserVote(type);
    } catch (error) {
      console.error("Vote failed:", error);
    }
  };

  if (loading) {
    return <div className={styles.feedbackContainer}>Loading feedback...</div>;
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
        
      </p>
    </div>
  );
}
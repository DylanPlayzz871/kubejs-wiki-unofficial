import React, { useState, useEffect } from 'react';
import styles from './CodeFeedback.module.css';

export default function CodeFeedback({ nodeId }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [userVote, setUserVote] = useState(null); // null, 'like', or 'dislike'

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`feedback-${nodeId}`);
    if (saved) {
      const data = JSON.parse(saved);
      setLikes(data.likes || 0);
      setDislikes(data.dislikes || 0);
      setUserVote(data.userVote || null);
    }
  }, [nodeId]);

  const saveData = (newLikes, newDislikes, vote) => {
    localStorage.setItem(`feedback-${nodeId}`, JSON.stringify({
      likes: newLikes,
      dislikes: newDislikes,
      userVote: vote
    }));
  };

  const handleLike = () => {
    if (userVote === 'like') return; // Already liked

    let newLikes = likes;
    let newDislikes = dislikes;

    if (userVote === 'dislike') {
      newDislikes--; // Remove previous dislike
    }
    newLikes++;

    setLikes(newLikes);
    setDislikes(newDislikes);
    setUserVote('like');
    saveData(newLikes, newDislikes, 'like');
  };

  const handleDislike = () => {
    if (userVote === 'dislike') return; // Already disliked

    let newLikes = likes;
    let newDislikes = dislikes;

    if (userVote === 'like') {
      newLikes--; // Remove previous like
    }
    newDislikes++;

    setLikes(newLikes);
    setDislikes(newDislikes);
    setUserVote('dislike');
    saveData(newLikes, newDislikes, 'dislike');
  };

  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.reactions}>
        <button 
          onClick={handleLike} 
          className={`${styles.likeBtn} ${userVote === 'like' ? styles.active : ''}`}
        >
          👍 Like <span className={styles.count}>{likes}</span>
        </button>
        
        <button 
          onClick={handleDislike} 
          className={`${styles.dislikeBtn} ${userVote === 'dislike' ? styles.active : ''}`}
        >
          👎 Dislike <span className={styles.count}>{dislikes}</span>
        </button>
      </div>

      {userVote && (
        <p className={styles.votedMessage}>
          You voted {userVote === 'like' ? '👍 Like' : '👎 Dislike'}. Feel free to change your mind at any time if you need.
        </p>
      )}
    </div>
  );
}
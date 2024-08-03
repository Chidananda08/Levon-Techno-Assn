// src/components/widgets/ActivityFeed.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ActivityFeed.css';

const ActivityFeed = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('/api/activity-feed')
      .then(response => setActivities(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      <ul>
        {activities.map(activity => (
          <li key={activity.id}>{activity.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;

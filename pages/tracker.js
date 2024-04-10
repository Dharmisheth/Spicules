import React, { useState, useEffect } from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

const TimeTracker = () => {
  const [startTime, setStartTime] = useState(null); // State to hold the start time
  const [elapsedTime, setElapsedTime] = useState(0); // State to hold the elapsed time
  const [isTracking, setIsTracking] = useState(false); // State to track if tracking is active

  // Function to start the time tracker
  const startTracker = () => {
    setStartTime(Date.now()); // Set the start time to the current timestamp
    setIsTracking(true); // Set tracking to active
  };

  // Function to stop the time tracker
  const stopTracker = () => {
    setElapsedTime(0); // Reset elapsed time
    setIsTracking(false); // Set tracking to inactive
  };

  useEffect(() => {
    let interval;
    if (isTracking) {
      interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Calculate elapsed time in seconds
        setElapsedTime(elapsedTime);
      }, 1000); // Update elapsed time every second
    } else {
      clearInterval(interval); // Clear interval when tracking is stopped
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount or state change
  }, [isTracking, startTime]);

  useEffect(() => {
    startTracker(); // Start the tracker automatically when the component mounts
    return () => stopTracker(); // Stop the tracker when the component unmounts
  }, []);

  // Function to format elapsed time
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Card>
    <div>
      <CardTitle tag="h4" className="border-bottom p-3 mb-0">
            Time Spent
      </CardTitle>
      <CardBody>
      <div className="display-8">{formatTime(elapsedTime)}</div>
      </CardBody>

    </div>
    </Card>
  );
};

export default TimeTracker;

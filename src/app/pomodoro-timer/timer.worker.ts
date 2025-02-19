self.onmessage = (e: MessageEvent) => {
  const { type, startTime, duration } = e.data;
  
  if (type === 'start') {
    console.log('Worker: Timer started with duration:', duration);
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedTime = Math.floor((currentTime - startTime) / 1000);
      const remainingTime = Math.max(0, duration - elapsedTime);
      
      self.postMessage({ remainingTime });
      
      if (remainingTime <= 0) {
        console.log('Worker: Timer completed');
        clearInterval(interval);
        self.postMessage({ type: 'completed' });
      }
    }, 1000);
  }
};
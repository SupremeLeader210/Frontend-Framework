/* Today's Trends Chart */
const ctx = document.getElementById('trendsChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
    datasets: [
      {
        label: 'Today',
        data: [12,14,10,16,13,11,20,28,38,44,42,35,30,38,45,42,40,36,30,26,22,18,15],
        borderColor: '#0d6efd',
        backgroundColor: 'rgba(13,110,253,0.1)',
        fill: true,
        tension: 0.45,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#0d6efd',
      },
      {
        label: 'Yesterday',
        data: [10,12,9,14,11,10,15,18,22,24,28,30,22,18,20,22,18,16,14,12,10,8,7],
        borderColor: '#adb5bd',
        borderDash: [5,4],
        backgroundColor: 'rgba(173,181,189,0.1)',
        fill: true,
        tension: 0.45,
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#adb5bd',
      }
    ]
  },
  options: {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#000',
        bodyColor: '#666',
        borderColor: '#dee2e6',
        borderWidth: 1,
        padding: 10,
        displayColors: true,
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          autoSkip: true,
          maxTicksLimit: 8,
        }
      },
      y: { position: 'right' }
    }
  }
});

/* Rick Roll Modal - autoplay and fullscreen on open */
const rickModal = document.getElementById('rickModal');
const rickVideo = document.getElementById('rickVideo');

rickModal.addEventListener('shown.bs.modal', () => {
  rickVideo.play();
  rickVideo.requestFullscreen();
});

rickModal.addEventListener('hidden.bs.modal', () => {
  rickVideo.pause();
  rickVideo.currentTime = 0;
});

/* Close modal when exiting fullscreen */
rickVideo.addEventListener('fullscreenchange', () => {
  if (!document.fullscreenElement) {
    const modal = bootstrap.Modal.getInstance(rickModal);
    modal.hide();
  }
});
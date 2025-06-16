import React from 'react';

const App: React.FC = () => {
  // Reset any potential body/html styles that might be affecting layout
  React.useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.width = '100vw';
    document.body.style.overflow = 'hidden';
  }, []);

  return (
    <div style={{ 
      width: '100vw',
      height: '100vh',
      margin: 0, 
      padding: 0,
      background: 'linear-gradient(to bottom right, #2563eb, #4338ca)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
    }}>
      <div style={{
        width: '90%',
        maxWidth: '800px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(12px)',
        borderRadius: '12px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        padding: '2rem',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        textAlign: 'center',
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem', textAlign: 'center' }}>
          Mentor Management
        </h1>
        <div style={{ width: '6rem', height: '0.25rem', backgroundColor: '#facc15', margin: '0 auto 1.5rem', borderRadius: '9999px' }}></div>
        
        <h2 style={{ fontSize: '1.75rem', fontWeight: '500', color: 'white', marginBottom: '1.5rem', textAlign: 'center' }}>
          Очаквайте скоро
        </h2>
        
        <p style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', textAlign: 'center' }}>
          Платформата за менторство и управление е в процес на разработка. Благодарим ви за търпението!
        </p>
        
        <div style={{ marginTop: '2rem', color: 'rgba(255, 255, 255, 0.9)', textAlign: 'center' }}>
          <p style={{ marginBottom: '0.5rem' }}>тел. 0899 109 507</p>
          <p style={{ marginBottom: '0.5rem' }}>email: mentor.management.mm@gmail.com</p>
          <p style={{ marginBottom: '0.5rem' }}>office@mentor-management.eu</p>
          <p style={{ marginBottom: '0.5rem' }}>v.kostova@mentor-management.eu</p>
        </div>
      </div>
      
      <div style={{ position: 'absolute', bottom: 0, width: '100%', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
          2025 Mentor Management. Всички права запазени.
        </p>
      </div>
    </div>
  );
};

export default App;

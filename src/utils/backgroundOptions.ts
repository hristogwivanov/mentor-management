// Professional business background options from Unsplash
export const backgroundOptions = {
  // Option 1: Modern office with glass and steel
  modernOffice: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Option 2: Corporate meeting room
  meetingRoom: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Option 3: Business handshake/partnership
  partnership: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Option 4: Professional workspace
  workspace: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Option 5: City skyline (business district)
  cityscape: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  
  // Option 6: Corporate building interior
  corporate: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80'
};

// More sophisticated color themes for business
export const colorThemes = {
  // Elegant dark theme with gold accents
  elegant: {
    primary: '#1a1a1a',
    secondary: '#2d2d2d',
    accent: '#d4af37', // Gold
    overlay: 'linear-gradient(to bottom right, rgba(26, 26, 26, 0.85), rgba(45, 45, 45, 0.85))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.8)'
  },
  
  // Professional navy theme
  navy: {
    primary: '#1e3a8a',
    secondary: '#1e40af',
    accent: '#f59e0b', // Amber
    overlay: 'linear-gradient(to bottom right, rgba(30, 58, 138, 0.9), rgba(30, 64, 175, 0.9))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.9)'
  },
  
  // Modern charcoal theme
  charcoal: {
    primary: '#374151',
    secondary: '#4b5563',
    accent: '#10b981', // Emerald
    overlay: 'linear-gradient(to bottom right, rgba(55, 65, 81, 0.9), rgba(75, 85, 99, 0.9))',
    text: '#ffffff',
    textSecondary: 'rgba(255, 255, 255, 0.85)'
  }
};

export default { backgroundOptions, colorThemes };

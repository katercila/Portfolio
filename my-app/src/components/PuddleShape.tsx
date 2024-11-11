import React from 'react';

interface PuddleShapeProps {
  color: string; // Prop for the solid color
  altText: string;  // Alt text for accessibility (still required, even if not using an image)
}

const PuddleShape: React.FC<PuddleShapeProps> = ({ color, altText }) => {
  return (
    <div style={styles.container}>
      {/* Using a solid color background instead of an image */}
      <div style={{ ...styles.image, backgroundColor: color }} aria-label={altText}></div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
    container: {
        position: 'relative',
        width: '200px', // Adjust width
        height: '200px', // Adjust height
        // clipPath: 'polygon(10% 30%, 20% 10%, 50% 5%, 80% 10%, 90% 30%, 80% 50%, 50% 80%, 20% 50%)', // Irregular puddle-like shape
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Optional shadow to make it pop
        borderRadius: '15%', // Slightly rounded edges for a more natural puddle effect
      },
      image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Ensures the color or image covers the area of the shape
      },
};

export default PuddleShape;


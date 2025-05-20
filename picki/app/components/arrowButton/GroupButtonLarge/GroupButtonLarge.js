import './GroupButtonLarge.css';

export default function GroupButtonLarge({ name = 'Group Name', imageUrl = '', bgColor = '#d1fae5' }) {
  const fallbackImage = '/images/group-default.png'; // fallback if imageUrl is empty

  return (
    <div className="group-card-large">
      <img
        src={imageUrl || fallbackImage}
        alt="Group members"
        className="group-image-large"
      />
      <div className="group-name-container-large" style={{ backgroundColor: bgColor }}>
        <h2 className="group-name-large">{name}</h2>
      </div>
    </div>
  );
}

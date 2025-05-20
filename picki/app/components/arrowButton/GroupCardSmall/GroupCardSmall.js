import './GroupCardSmall.css';

export default function GroupCard({ name = 'Group Name', imageUrl = '' }) {
  const fallbackImage = '/images/group-default.png'; // served from /public

  return (
    <div className="group-card">
      <img
        src={imageUrl || fallbackImage}
        alt="Group members"
        className="group-image"
      />
      <div className="group-name-container">
        <h2 className="group-name">{name}</h2>
      </div>
    </div>
  );
}

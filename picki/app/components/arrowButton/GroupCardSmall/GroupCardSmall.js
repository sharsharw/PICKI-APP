import './GroupCardSmall.css';

export default function GroupCard({ name = 'Group Name', imageUrl = '/default-image.jpg' }) {
    return (
      <div className="group-card">
        <img src={imageUrl} alt="Group members" className="group-image" />
        <div className="group-name-container">
          <h2 className="group-name">{name}</h2>
        </div>
      </div>
    );
  }
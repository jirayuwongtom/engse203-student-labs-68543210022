function RequestCard({ request, onDeleteRequest }) {
  return (
    <article className="request-card">
      <div>
        <p className="request-id">{request.id}</p>
        <h3>{request.requestType}</h3>
        <p><strong>ผู้แจ้ง:</strong> {request.requesterName}</p>
        <p><strong>สถานที่:</strong> {request.location}</p>
        <p><strong>รายละเอียด:</strong> {request.details}</p>
        <p><strong>ความเร่งด่วน:</strong> {request.priority}</p>
        <p><strong>สถานะ:</strong> {request.status}</p>
      </div>
      <button type="button" onClick={() => onDeleteRequest(request.id)}>ลบ</button>
    </article>
  );
}

export default RequestCard;


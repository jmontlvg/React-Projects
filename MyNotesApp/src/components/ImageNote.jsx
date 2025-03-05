import mathNotes from "../images/mathNotes.jpg";

function ImageNote() {
  return (
    <div className="imageNote">
      <div id="titleImageNote">
        <h1>Math Class 📚</h1>
      </div>
      <div id="image">
        <img src={mathNotes} alt="Math Notes" />
      </div>
    </div>
  );
}

export default ImageNote;

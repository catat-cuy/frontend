import { MdAdd } from "react-icons/md";
import { NoteCard } from "../../component/Cards/NoteCard";
import Navbar from "../../component/Navbar/Navbar";
import AddEditNotes from "./AddEditNotes";
import { useState } from "react";
import Modal from "react-modal";

export default function Home() {
  const [openAddEditModal, setOpenAddModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });
  return (
    <>
      <Navbar />

      <div className="container mx-auto mt-8 px-4">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard
            title="Test"
            date="04 Dec 2024"
            content="Test"
            isPinned={true}
            onEdit={() => {}}
            onDelete={() => {}}
            onPinNote={() => {}}
          />
        </div>
      </div>

      <button
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10"
        onClick={() => {
          setOpenAddModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd className="text-[32px] text-white" />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: { backgroundColor: "rgba(0,0,0,0.2)" },
        }}
        contentLabel="Add Notes"
        className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-auto"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddModal({ isShown: false, type: "add", data: null });
          }}
        />
      </Modal>
    </>
  );
}

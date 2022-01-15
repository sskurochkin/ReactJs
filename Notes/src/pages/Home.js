import React, { useContext, useEffect } from "react";
import { Form } from "../components/Form";
import Loader from "../components/Loader";
import { Notes } from "../components/Notes";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/fireBaseContext";

function Home(props) {
	const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext);
	const alert = useContext(AlertContext)
	useEffect(() => {
		//получаем все заметки из базы
		fetchNotes();
		// eslint-disable-next-line
	}, []);

	const noteDelete = (id)=>{
		alert.show('Заметка была удалена', 'warning')
		removeNote(id)
	}

	return (
		<>
			<Form />
			<hr />
			{loading ? <Loader /> : <Notes notes={notes} onRemove={noteDelete}/>}
		</>
	);
}

export default Home;

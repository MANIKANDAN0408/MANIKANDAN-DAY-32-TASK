
import { Button, TextField } from '@mui/material';
import { useFormik } from "formik";

import { useNavigate } from 'react-router-dom';

import * as yup from "yup";



const bookValidationSchema = yup.object({
    name: yup.string().required("Enter book name"),
    cover: yup.string().min(4).required("Enter book cover URL").url(),
    author: yup.string().required("Enter author name"),
    genre: yup.string().required("Enter genre"),
    language: yup.string().required("Enter book language"),
    release: yup.number().min(4).required("Enter published year")
})

export function AddBook() {

    const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            name: "",
            author: "",
            genre: "",
            language: "",
            release: ""
        },

        validationSchema: bookValidationSchema,
        onSubmit: (newBook) => {

            console.log("Submitted", values);
            addNewBook(newBook)
        }
    });

    const navigate = useNavigate();

    const addNewBook = (newBook) => {

        fetch("https://63c55bddf80fabd877e696eb.mockapi.io/books", {

            method: "POST",
            body: JSON.stringify(newBook),
            headers: { "Content-type": "application/json" }

        }).then(() => navigate("/books"));
    };

    return (
        <form onSubmit={handleSubmit} className='add-container'>
            <h2>ADD NEW BOOK</h2>
            <TextField
                label="Name"
                variant="outlined"
                value={values.name}
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && errors.name}
                helperText={touched.name && errors.name ? errors.name : null}
            />

            <TextField
                label="Author"
                variant="outlined"
                value={values.author}
                name="author"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.author && errors.author}
                helperText={touched.author && errors.author ? errors.author : null}
            />

            <TextField
                label="Genre"
                variant="outlined"
                value={values.genre}
                name="genre"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.genre && errors.genre}
                helperText={touched.genre && errors.genre ? errors.genre : null}
            />

            <TextField
                label="Language"
                variant="outlined"
                value={values.language}
                name="language"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.language && errors.language}
                helperText={touched.language && errors.language ? errors.language : null}
            />

            <TextField
                label="Year"
                variant="outlined"
                value={values.release}
                name="release"
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.release && errors.release}
                helperText={touched.release && errors.release ? errors.release : null}
            />

               <Button variant='contained' type='submit'>SUBMIT</Button>
        </form>
    );
}

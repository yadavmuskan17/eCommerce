// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import "./Add.css"
// import { useState } from 'react';
// import BASE_URL from '../../config';
// import axios from "axios";

// function Add_Product() {
//     const [selectedCategory, setSelectedCategory] = useState("");
//     const [input, setInput] = useState({});
//     const [images, setImages] = useState([]);

//     const categories = {
//         Earbuds: "Earbuds", 
//         Headphones: "Headphones",
//         Neckband: "Neckband",
//         Speakers: "Speakers",
//         Earphones: "Earphones"
//     };

//     const handleCategoryChange = (e) => {
//         setSelectedCategory(e.target.value);
//     };

//     const handleInput = (e) => {
//         const { name, value } = e.target;
//         setInput((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleFileChange = (e) => {
//         setImages(Array.from(e.target.files));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();

//         for (let key in input) {
//             formData.append(key, input[key]);
//         }
//         formData.append("category", selectedCategory);

//         images.forEach((image) => formData.append("files", image));

//         try {
//             const api = `${BASE_URL}/admin/productsave`;
//             await axios.post(api, formData, {
//                 headers: { 'Content-Type': 'multipart/form-data' },
//             });
//             alert("File uploaded successfully!");
//         } catch (error) {
//             console.error("Upload error:", error);
//         }
//     };

//     return (
//         <div className='addfrom'>
//             <h1 style={{ color: "#fff", textAlign: "center" }}>Add Product</h1>
//             <Form style={{ width: "500px" }} onSubmit={handleSubmit}>
//                 <Form.Select aria-label="Default select example" value={selectedCategory} onChange={handleCategoryChange}>
//                     <option value="">Select Category</option>
//                     {Object.keys(categories).map((cat) => (
//                         <option key={cat} value={cat}>{cat}</option>
//                     ))}
//                 </Form.Select>

//                 <Form.Group className="mb-3">
//                     <Form.Label> Product Name</Form.Label>
//                     <Form.Control type="text" placeholder="Enter Name" name="name" value={input.name || ""} onChange={handleInput} />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                     <Form.Label>Enter Brand</Form.Label>
//                     <Form.Control type="text" placeholder="Brand" name="brand" value={input.brand || ""} onChange={handleInput} />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                     <Form.Label>Enter Price</Form.Label>
//                     <Form.Control type="text" placeholder="Price" name="price" value={input.price || ""} onChange={handleInput} />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                     <Form.Label>Enter Description</Form.Label>
//                     <Form.Control as="textarea" rows={3} name="description" value={input.description || ""} onChange={handleInput} />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                     <Form.Label>Upload Images</Form.Label>
//                     <Form.Control type="file" multiple onChange={handleFileChange} />
//                 </Form.Group>

//                 <Button variant="primary" type="submit">
//                     Submit
//                 </Button>
//             </Form>
//         </div>
//     );
// }

// export default Add_Product;




import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Add.css";
import { useState } from "react";
import BASE_URL from "../../config";
import axios from "axios";

function Add_Product() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [input, setInput] = useState({});
    const [images, setImages] = useState([]);

    const categories = {
        Earbuds: "Earbuds",
        Headphones: "Headphones",
        Neckband: "Neckband",
        Speakers: "Speakers",
        Earphones: "Earphones"
    };

    const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
    const handleInput = (e) => setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    
    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
            setImages(Array.from(e.target.files));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        for (let key in input) {
            formData.append(key, input[key]);
        }
        formData.append("category", selectedCategory);
        images.forEach((image) => formData.append("files", image));

        try {
            const api = `${BASE_URL}/admin/productsave`;
            await axios.post(api, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            alert("File uploaded successfully!");
        } catch (error) {
            alert(`Upload failed: ${error.response?.data?.error || "Unknown error"}`);
            console.error("Upload error:", error);
        }
    };

    return (
        <div className="addfrom">
            <h1 style={{ color: "#fff", textAlign: "center" }}>Add Product</h1>
            <Form style={{ width: "500px" }} onSubmit={handleSubmit}>
                <Form.Select aria-label="Default select example" value={selectedCategory} onChange={handleCategoryChange}>
                    <option value="">Select Category</option>
                    {Object.keys(categories).map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </Form.Select>

                <Form.Group className="mb-3">
                    <Form.Label> Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" name="name" value={input.name || ""} onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter Brand</Form.Label>
                    <Form.Control type="text" placeholder="Brand" name="brand" value={input.brand || ""} onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" name="price" value={input.price || ""} onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Enter Description</Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" value={input.description || ""} onChange={handleInput} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Upload Images</Form.Label>
                    <Form.Control type="file" multiple onChange={handleFileChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Add_Product;

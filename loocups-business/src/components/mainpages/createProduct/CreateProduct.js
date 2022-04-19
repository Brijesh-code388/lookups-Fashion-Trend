import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalState } from '../../../GlobalState'
import Loading from '../utils/loading/Loading'
import { useHistory, useParams } from 'react-router-dom'

const initialState = {
    product_id: '',
    title: '',
    like: 0,
    description: '',
    category: '',
    _id: ''
}
const initialLink = {
    topIn: '',
    topout: '',
    bottom: '',
    shoes: '',
    glass: '',
    watch: '',
    cap: '',
    belt: ''
}



function CreateProduct() {
    const state = useContext(GlobalState)
    const [product, setProduct] = useState(initialState)
    const [categories] = state.categoriesAPI.categories
    const [images, setImages] = useState(false)
    const [loading, setLoading] = useState(false)


    const [isAdmin] = state.userAPI.isAdmin
    const [token] = state.token

    const history = useHistory()
    const param = useParams()


    // link
    let [links, setLinks] = useState(initialLink);



    const [products] = state.productsAPI.products
    const [onEdit, setOnEdit] = useState(false)
    const [callback, setCallback] = state.productsAPI.callback

    useEffect(() => {
        if (param.id) {
            setOnEdit(true)
            products.forEach(product => {
                if (product._id === param.id) {
                    setProduct(product)
                    setImages(product.images)
                    setLinks(product.links)
                }
            })
        } else {
            setOnEdit(false)
            setProduct(initialState)
            setLinks(initialLink)
            setImages(false)
        }
    }, [param.id, products])

    const handleUpload = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not an admin")
            const file = e.target.files[0]

            if (!file) return alert("File not exist.")
            console.log(file.size)
            if (file.size > 1024 * 1024 * 10) // 1mb
                return alert("Size too large!")

            if (file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
                return alert("File format is incorrect.")

            let formData = new FormData()
            formData.append('file', file)

            setLoading(true)
            const res = await axios.post('/api/upload', formData, {
                headers: { 'content-type': 'multipart/form-data', Authorization: token }
            })
            setLoading(false)
            console.log(res.data)
            setImages(res.data)

        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleDestroy = async () => {
        try {
            if (!isAdmin) return alert("You're not an admin")
            setLoading(true)
            await axios.post('/api/destroy', { public_id: images.public_id }, {
                headers: { Authorization: token }
            })
            setLoading(false)
            setImages(false)
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const handleChangeInput = e => {
        const { name, value } = e.target
        setProduct({ ...product, [name]: value })
    }

    const handleChangeInputLink = e => {
        const { name, value } = e.target
        setLinks({ ...links, [name]: value })
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            if (!isAdmin) return alert("You're not an admin")
            if (!images) return alert("No Image Upload")
            // if (links.belt == '' || links.bottom == '' || links.cap == '' || links.glass == '' || links.shoes == '' || links.topIn == '' || links.topout == '' || links.watch == '') return alert("atleast one link required")

            if (onEdit) {
                await axios.put(`/api/products/${product._id}`, { ...product, images, links }, {//add link
                    headers: { Authorization: token }
                })
            } else {
                await axios.post('/api/products', { ...product, images, links }, {
                    headers: { Authorization: token }
                })
            }
            console.log({ ...product, images, links })
            setCallback(!callback)
            // history.push("/")
            history.replace('/')
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    const styleUpload = {
        display: images ? "block" : "none"
    }
    return (
        <div className="create_product">
            <div className="upload">
                <input type="file" name="file" id="file_up" onChange={handleUpload} />
                {
                    loading ? <div id="file_img"><Loading /></div>

                        : <div id="file_img" style={styleUpload}>
                            <img src={images ? images.url : ''} alt="" />
                            <span onClick={handleDestroy}>X</span>
                        </div>
                }

            </div>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label htmlFor="product_id">Product ID</label>
                    <input type="text" name="product_id" id="product_id" required
                        value={product.product_id} onChange={handleChangeInput} disabled={onEdit} />
                </div>

                <div className="row">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" required
                        value={product.title} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="price">like</label>
                    <input type="number" name="like" id="like" required
                        value={product.like} onChange={handleChangeInput} />
                </div>

                <div className="row">
                    <label htmlFor="description">Description</label>
                    <textarea type="text" name="description" id="description" required
                        value={product.description} rows="5" onChange={handleChangeInput} />
                </div>



                <div className="row">
                    <label htmlFor="description">topIN link</label>
                    <input type="text" name="topIn" id="topIn" required
                        value={links.topIn} onChange={handleChangeInputLink} />
                </div>
                <div className="row">
                    <label htmlFor="description">topOut link</label>
                    <input type="text" name="topout" id="topout"
                        value={links.topout} onChange={handleChangeInputLink} />
                </div>
                <div className="row">
                    <label htmlFor="description">bottom</label>
                    <input type="text" name="bottom" id="bottom"
                        value={links.bottom} onChange={handleChangeInputLink} />
                </div>
                <div className="row">
                    <label htmlFor="description">shoes</label>
                    <input type="text" name="shoes" id="shoes"
                        value={links.shoes} onChange={handleChangeInputLink} />
                </div>
                <div className="row">
                    <label htmlFor="description">glass</label>
                    <input type="text" name="glass" id="glass"
                        value={links.glass} onChange={handleChangeInputLink} />
                </div>
                <div className="row">
                    <label htmlFor="description">watch</label>
                    <input type="text" name="watch" id="watch"
                        value={links.watch} onChange={handleChangeInputLink} />
                </div>
                <div className="row">
                    <label htmlFor="description">cap</label>
                    <input type="text" name="cap" id="cap"
                        value={links.cap} onChange={handleChangeInputLink} />
                </div>
                <div className="row">
                    <label htmlFor="description">belt</label>
                    <input type="text" name="belt" id="belt"
                        value={links.belt} onChange={handleChangeInputLink} />
                </div>



                {/* <div className="row">
                    <label htmlFor="content">Content</label>
                    <textarea type="text" name="content" id="content" required
                    value={product.content} rows="7" onChange={handleChangeInput} />
                </div> */}

                <div className="row">
                    <label htmlFor="categories">Categories: </label>
                    <select name="category" value={product.category} onChange={handleChangeInput} >
                        <option value="">Please select a category</option>
                        {
                            categories.map(category => (
                                <option value={category._id} key={category._id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>

                <button type="submit">{onEdit ? "Update" : "Create"}</button>
            </form>
        </div>
    )
}

export default CreateProduct

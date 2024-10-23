import { useLoaderData} from "react-router-dom";
import Form from '../Form/Form'
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic'
import useAxiosSecure from '../../hooks/useAxiousSecure'
import Swal from 'sweetalert2';
const image_hoisting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`
const UpdateItem = () => {
    const item = useLoaderData()
    const { _id } = item
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        // image upload
        const imageFile = { image: data.photo[0] }
        const res = await axiosPublic.post(image_hoisting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        // console.log(res.data)
        if (res.data.success) {
            const newItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }
            // console.log(newItem);
            const itemRes = await axiosSecure.patch(`/menu/${_id}`, newItem)
            console.log(itemRes.data)
            if (itemRes.data.modifiedCount) {
                reset()
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${data.name} has been saved updated`,
                    showConfirmButton: false,
                    timer: 1500
                });

            }
        }
    };

    return (
        <div>
            <Form item={item} register={register} handleSubmit={handleSubmit} onSubmit={onSubmit}></Form>
        </div>
    );
};

export default UpdateItem;
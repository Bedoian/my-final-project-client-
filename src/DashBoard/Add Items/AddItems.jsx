import SectionTitle from '../../Components/Title/SectionTitle'
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic'
import useAxiosSecure from '../../hooks/useAxiousSecure'
import Swal from 'sweetalert2';
import Form from '../Form/Form'
const image_hoisting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hoisting_api = `https://api.imgbb.com/1/upload?key=${image_hoisting_key}`
const AddItems = () => {
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
        if (res.data.success) {
            const newItem = {
                name: data.name,
                recipe: data.recipe,
                image: res.data.data.display_url,
                category: data.category,
                price: parseFloat(data.price)
            }
            const itemRes = await axiosSecure.post('/menu', newItem)
            console.log(itemRes.data)
            if (itemRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: `${data.name} has been saved on database`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (

        <div>
            <SectionTitle hading={"ADD AN ITEM"} subHeading={"---What's new?---"}></SectionTitle>
            <Form register={register} handleSubmit={handleSubmit} onSubmit={onSubmit}></Form>
        </div>
    );
};

export default AddItems;
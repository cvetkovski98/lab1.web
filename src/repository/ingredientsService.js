import axios from '../custom-axios/axios'
import qs from 'qs'

export const IngredientsService = {
    fetchIngredients: async () => {
        return await axios.get("/ingredients");
    },

    addIngredient: async (ingredient) => {
        const formData = qs.stringify(ingredient);
        return await axios.post("/ingredients", formData);
    }
};
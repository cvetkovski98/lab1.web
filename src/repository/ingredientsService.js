import axios from '../custom-axios/axios'

export const IngredientsService = {
    fetchIngredients: async () => {
        return await axios.get("/ingredients");
    }
};
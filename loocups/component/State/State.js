import { createContext, useContext } from 'react';

import ProductsAPI from '../api/PostApi';
import CategoriesAPI from '../api/CategoryApi';

const AppContext = createContext();

export function AppWrapper({ children }) {


    const state = {
        productsAPI: ProductsAPI(),
        categoriesAPI: CategoriesAPI()
    }

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
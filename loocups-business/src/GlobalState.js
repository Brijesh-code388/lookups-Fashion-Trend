import React, { createContext, useState, useEffect } from 'react'
import ProductsAPI from './api/ProductsAPI'
import UserAPI from './api/UserAPI'
import CategoriesAPI from './api/CategoriesAPI'

import axios from 'axios'

export const GlobalState = createContext()


export const DataProvider = ({ children }) => {
    const [token, setToken] = useState(false)


    useEffect(() => {
        const firstLogin = localStorage.getItem('firstLogin')
        if (firstLogin) {
            const refreshToken = async () => {
                // console.log('hu refresh thau chu!!!')
                const res = await axios.get('/user/refresh_token')
                // console.log('hu refresh thau chu!!!')
                // console.     log(res.data.accesstoken)

                setToken(res.data.accesstoken)

                setTimeout(() => {
                    refreshToken()
                }, 7 * 10 * 60 * 60 * 1000)
            }
            refreshToken()
        }
    }, [])



    const state = {
        token: [token, setToken],
        productsAPI: ProductsAPI(),
        userAPI: UserAPI(token),
        categoriesAPI: CategoriesAPI()
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
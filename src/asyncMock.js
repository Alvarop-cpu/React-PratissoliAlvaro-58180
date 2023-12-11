const products = [
    {
        id: "1",
        tittle: "Remera essential negra oversize",
        price: 20000,
        category: "Remeras",
        img: 'https://acdn.mitiendanube.com/stores/001/168/383/products/21147027-j1-d0d6263bc98d9cd0e016938533837908-640-0.jpg',
        stock: 15,
        description: "Descripcion de remeras"
    },
    {
        id: "2",
        tittle: "Remera 92 blanca oversize",
        price: 19000,
        category: "Remeras",
        img: 'https://acdn.mitiendanube.com/stores/001/168/383/products/21147012-b-31-8968aa3bac2ed9f57716938540600367-640-0.jpg',
        stock: 10,
        description: "Descripcion remera 92"
    },
    {
        id: "3",
        tittle: "Remera logo element",
        price: 18500,
        category: "Remeras",
        img: 'https://acdn.mitiendanube.com/stores/001/168/383/products/21147030b1-43a0de162b842cd4bc16945468518722-640-0.jpg',
        stock: 15,
        description: "Desc remera logo naranja"
    }
]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(products.filter(prod=> prod.category === categoryId))
        },500)
    })
}

const cloths = [
    {
        id: 1,
        image: "/cloth-image/cloth_1.jpg",
        title: "Album",
        price: 21.99
    },
    {
        id: 2,
        image: "/cloth-image/cloth_2.jpg",
        title: "Beanie",
        price: 8.99
    },
    {
        id: 3,
        image: "/cloth-image/cloth_3.jpg",
        title: "Beanie with Logo",
        price: 55.99
    },
    {
        id: 4,
        image: "/cloth-image/cloth_4.jpg",
        title: "T-shirt",
        price: 21.99
    },
    {
        id: 5,
        image: "/cloth-image/cloth_5.jpg",
        title: "Cap",
        price: 11.99
    },
    {
        id: 6,
        image: "/cloth-image/cloth_6.jpg",
        title: "Hoodie",
        price: 28.99
    },
    {
        id: 7,
        image: "/cloth-image/cloth_7.jpg",
        title: "Hoodie with Zipper",
        price: 44.99
    },
    {
        id: 8,
        image: "/cloth-image/cloth_8.jpg",
        title: "Bag",
        price: 69.99
    }
]
export default cloths

export const getAllClothtIds = () => {
    const clothsId = cloths.map(cloth => {
        return {
            params: {
                id: cloth.id.toString()
            }
        }
    })
    return clothsId
}


export const getClothData = (id) => {

    const cloth = cloths.find(cloth => cloth.id == id)
    return {
        id,
        image: cloth.image,
        title: cloth.title,
        price: cloth.price
    }
}
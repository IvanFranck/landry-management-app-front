type BaseEntity = {
    id: number
    createdAt: Date
    updatedAt: Date
}
export type UserEntity = BaseEntity & {
    username: string
    phone: number
    password: string
    signUpCompleted: boolean
    services: ServicesEntity[]
}

export type ServicesEntity = BaseEntity & {
    label: string
    price: number
    description: string | undefined
    userId: number
}

export type CustomersEntity = BaseEntity & {
    name: string
    phone: number,
    address: string
}
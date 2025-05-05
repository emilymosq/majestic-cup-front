

const {deleteItem} = new UserLocalRepositoryImpl();

export const deleteUserUseCase = async () => {
    return await deleteItem();
}
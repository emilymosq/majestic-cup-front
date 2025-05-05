

const {getUser} = new UserLocalRepositoryImpl();

export const getUserUseCase = async () => {
    return await getUser();
}
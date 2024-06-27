import { CardWrapper } from '../Components/card-wrapper'

export const LoginForm = () => {
    return(
        <div>
            <CardWrapper
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account?"
            backButtonHref='/auth/register'
            showSocial
            >
            login form!
            </CardWrapper>
        </div>
    )
}
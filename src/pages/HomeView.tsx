import Link from '@mui/material/Link';

export function HomeView() {
    return (
        <>
            <h1>Home</h1>
            <ul>
                <li>
                    <Link href="sign-in" underline="none">
                        {'Login'}
                    </Link>                    
                </li>
                <li>
                    <Link href="sign-up" underline="none">
                        {'Cadastre-se'}
                    </Link>                    
                </li>
            </ul>
        </>
    )
}
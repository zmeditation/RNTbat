import React from 'react'
import { DefaultButton, IconButton } from '../../core/button'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useRouter } from 'next/router';
const ConnexionForm = () => {
    const Router = useRouter();
    return (
        <div className='ConnexionForm'>
            <div className='LoginForm'>
                <div className='Title'>
                    <h3>Connectez-vous à <span>NTIC Rabat</span></h3>
                    <p>Accès pour des fonctionnalités avancées uniquement pour les stagiaires de l&apos;institut.</p>
                </div>
                <hr></hr>
                <form action="" method='POST'>
                    <div className='FormControl'>
                        <IconButton bgColor="Blue">
                            <EmailIcon />
                        </IconButton>
                        <input type="text" name="email" placeholder='E-mail' />
                    </div>
                    <div className='FormControl'>
                        <IconButton bgColor="Blue">
                            <LockIcon />
                        </IconButton>
                        <input type="password" name="email" placeholder='Mot de pass' />
                    </div>
                    <div className='FormCheckbox'>
                        <input type="checkbox" name="email" className='Checkbox' id="RememberMe" />
                        <label htmlFor="RememberMe">Se souvenir de moi</label>
                    </div>

                    <DefaultButton >
                        Se connecter
                    </DefaultButton>
                    <DefaultButton >
                        Mot de pass oublié ?
                    </DefaultButton >
                    <div className='SwitchLink'>
                        <p>Vous n'avez pas de compte ? <span onClick={() => Router.push('/inscription')}>Inscrivez-vous</span></p>

                    </div>
                </form>
            </div >
        </div >
    )
}

export default ConnexionForm
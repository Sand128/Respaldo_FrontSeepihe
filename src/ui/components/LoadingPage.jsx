import Ondas from '../../images/ondas3.svg';
import LogoIsem from '../../images/logo_isem.svg';
import Loading from '../../images/loading.gif';


export const LoadingPage = () => {

    const backgroundLogin = {
        backgroundImage: 'url(' + Ondas + ')',
        backgroundRepeat: 'no-repeat', 
        backgroundSize: '100% 100%'
    }

    return (
        <main className="bg-gradient-to-r from-colorAuxiliar to-colorPrimario" >
            <div style={backgroundLogin}>    
                <div className="relative md:flex h-screen w-screen">
                    <div className="flex-1 pt-80">
                        <div className='flex items-center justify-center pb-14'>
                            <img className="w-48 h-48 sm:w-auto sm:h-full" src={LogoIsem} alt="ISEM"/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className="w-48 h-48 sm:w-auto sm:h-full" src={Loading} alt="Loading"/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      );
}

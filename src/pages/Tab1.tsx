import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, 
    IonThumbnail, IonImg, IonLabel } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';


const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div id='img-div'>
            <IonItem>
                <h3>Welcome to  Computer Science Info</h3>
            </IonItem>
            <IonImg id='img' src={'https://images.unsplash.com/photo-1542641728-6ca359b085f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'} alt={'a picture of a computer'} />
            { /*<ExploreContainer/>*/ }
            <IonItem>
                <p>If you are interested in learning about computing at UWI select <i>More Info</i> below.</p>
            </IonItem>
        </div>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

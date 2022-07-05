import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, 
    IonItemSliding, IonItemOption, IonItemOptions } from '@ionic/react';
//import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

type Programmes = {
    name: string;
    url: string;
  };
  const programme: Programmes[] = [
    {name: 'BSc. General - Computer Science Major', url: 'https://www.mona.uwi.edu/compsci/programmes/bsc-general-computer-science-major'},
    {name: 'BSc. General - Software Engineering Major', url: 'https://www.mona.uwi.edu/compsci/programmes/bsc-general-software-engineering-major'},
    {name: 'BSc Information Technology', url: 'https://www.mona.uwi.edu/compsci/programmes/bsc-information-technology'},
    {name: 'BSc. Software Engineering (Mobile Application Technologies)', url: 'https://www.mona.uwi.edu/compsci/programmes/bsc-software-engineering-mobile-application-technologies'},
    {name: 'BSc Computer Studies Option', url: 'https://www.mona.uwi.edu/compsci/programmes/bsc-computer-studies-option'},
    {name: 'Minor in Computer Science', url: 'https://www.mona.uwi.edu/compsci/programmes/minor-computer-science'},
    {name: 'Minor in Software Engineering', url: 'https://www.mona.uwi.edu/compsci/programmes/minor-software-engineering'},
    {name: 'Minor in Information Technology', url: 'https://www.mona.uwi.edu/compsci/programmes/minor-information-technology'}
];

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>List of Majors & Minors in the Computing Department
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">List of Majors & Minors in the Computing Department</IonTitle>
          </IonToolbar>
        </IonHeader>  

        <IonItem>
            <p><i>Slide to the left for more info</i></p>
        </IonItem>

    {/*-- List of Sliding Items --*/}
      <IonList>
      {programme.map((info, i) => (
        <IonItem key={i}>
        <IonItemSliding>
          <IonItem>
            <IonLabel> {info.name} </IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption href='#' onClick={() => {window.open(info.url, '_blank', 'location=no')}}>More Info</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        </IonItem>
        ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;

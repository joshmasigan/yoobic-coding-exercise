import React, { useState } from "react";
import {
  IonHeader,
  IonToolbar,
  IonIcon,
  IonModal,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonAvatar,
  IonText,
} from "@ionic/react";
import { closeOutline, closeSharp } from "ionicons/icons";

// Should be used in place of IonModal in UserCard.tsx
// I could not find clear direction on how to pass detailModal's state 
// to parent object to control the Modal therefore, this is commented out

// type UserDetailProps = {
//   id: string;
//   name: string;
//   icon: string;
//   email: string;
//   country: string;
//   image: string;
// };

// export const UserDetailModal = (props: UserDetailProps) => {
//   const [detailModal, setDetailModal] = useState(false);

//   const handleCloseModal = () => {
//     setDetailModal(false);
//     console.log(detailModal);
//   };
//   return (
//     <IonModal isOpen={detailModal}>
//       <IonHeader>
//         <IonToolbar mode="ios" className="ion-padding">
//           <IonIcon
//             slot="start"
//             ios={closeOutline}
//             md={closeSharp}
//             onClick={() => setDetailModal(false)} // Modal currently does not close when clicked -> see console
//           />
//           <IonTitle className="ionTextCenter">{props.name}</IonTitle>
//         </IonToolbar>
//       </IonHeader>

//       {/* Detailed Modal component */}
//       <IonCard id="detailModal">
//         <IonCardHeader>
//           <IonImg src={props.image} />
//           <IonGrid>
//             <IonRow>
//               <IonCol size="3">
//                 <IonAvatar>
//                   <img src={props.icon} />
//                 </IonAvatar>
//               </IonCol>
//               <IonCol size="9">
//                 <IonCardTitle>{props.name}</IonCardTitle>
//                 <IonCardSubtitle>{props.email}</IonCardSubtitle>
//               </IonCol>
//             </IonRow>
//           </IonGrid>
//         </IonCardHeader>
//         <IonCardContent>
//           <IonText>
//             <p>This photo was taken in: {props.country}</p>
//           </IonText>
//         </IonCardContent>
//       </IonCard>
//     </IonModal>
//   );
// };

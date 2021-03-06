import React, {useContext, useEffect} from "react";
import {RouteComponentProps} from "react-router";
import {
    CreateAnimation,
    createAnimation,
    IonButton,
    IonButtons, IonChip, IonCol,
    IonContent, IonGrid,
    IonHeader,
    IonImg,
    IonPage, IonRow,
    IonText,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import {Header} from "../layout/Header";
import {Footer} from "../layout/Footer";
import './Welcome.css';
import {AuthContext, AuthState} from "../auth/AuthProvider";

export const Welcome: React.FC<RouteComponentProps> = ({history}) => {
    const { isAuthenticated} = useContext<AuthState>(AuthContext);
    let animation = function simpleAnimation() {
        const heart = document.querySelector("#heart");
        if(heart){
            const animation = createAnimation()
                .addElement(heart)
                .duration(1500)
                .iterations(Infinity)
                .keyframes([
                    {offset: 0, height: '95%' },
                    {offset: 0, width: '95%' },
                    {offset: 0.2, height: '97%'},
                    {offset: 0.2, width: '97%'},
                    {offset: 0.4, height: '100%'},
                    {offset: 0.4, width: '100%'},
                    {offset: 0.6, height: '97%'},
                    {offset: 0.6, width: '97%'},
                    {offset: 1, height: '95%'},
                    {offset: 1, width: '95%'},
                ])

            animation.play();
        }
    }

    useEffect(() => {
        if(isAuthenticated)
            history.push('/home');
    });

    return (
        <IonPage>
            <div className="flex-page-home">
            <Header/>
                <IonGrid className="grid-page">
                    <IonRow className="fullscreen-home">
                        <IonCol className="fullscreen-home">
                            <IonImg id="heart" className="heart-picture" src="assets/heart_welcome.png" alt="Anatomic heart"/>
                        </IonCol>
                        <IonCol>
                            <div className="">
                                <IonTitle className="welcome-title">A New Way to Look at Hearts</IonTitle>
                                <IonText className="welcome-text">HeartSync is the best platform to help you visualize and
                                               analyze CT heart medical scans. Upload an image of a CT scan and vizualize the segmented heart, take notes and share your models with other users.</IonText>
                                <IonButton color="medium" shape="round" href="/signup">Create account &gt;</IonButton>
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            {/*<IonContent scrollY={false} color="light" className="bottom-content">*/}
            {/*    <IonContent scrollY={false} color="light" className="left-content">*/}
            {/*        <IonContent scrollY={false} color="light" className="center">*/}
            {/*        <IonTitle className="welcome-title">About</IonTitle>*/}
            {/*            <IonContent scrollY={false} color="light" className="text-wrapper-bottom">*/}
            {/*            <IonText className="welcome-text">This is the website developed for my bachelor thesis. Users can submit CT scans of hearts and they can visualize the heart in a 3D environment.</IonText>*/}
            {/*            </IonContent>*/}
            {/*            </IonContent>*/}
            {/*    </IonContent>*/}
            {/*    <IonContent scrollY={false} color="light" className="right-content">*/}
            {/*        <IonContent scrollY={false} color="light" className="center">*/}
            {/*        <IonTitle className="welcome-title">Dev</IonTitle>*/}
            {/*            <IonContent scrollY={false} color="light" className="text-wrapper-bottom">*/}
            {/*            <IonText className="welcome-text">Hi, my name is Daria and I am a 21 years old developer. I will soon get my bachelor's degree.</IonText>*/}
            {/*            </IonContent>*/}
            {/*            </IonContent>*/}
            {/*    </IonContent>*/}

            {/*</IonContent>*/}
            {/*    <Footer></Footer>*/}
            </div>
            <CreateAnimation ref={animation}></CreateAnimation>
        </IonPage>
    )
};
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import IioIcon from 'react-native-vector-icons/Ionicons';
import { ArrowIcon } from '../Icons/ArrowIcon'
import { ShareIcon } from '../Icons/ShareIcon';
import { CountryIcon } from '../Icons/CountryIcon';
import { DownArrow } from '../Icons/DownArrow';
import { CoinIcon } from '../Icons/CoinIcon';
import { CheckIcon } from '../Icons/CheckIcon';
const AnalistScreen = () => {
    const [user, setUser] = useState([
        { name: 'Isim Soyisim', SubscribersNumber: 13, Image: require('../assets/person.jpg'), Country: 'Türkiye' },
    ]);
    const [allOffers, setAllOffers] = useState(140);
    const [daysOffers, setDaysOffers] = useState(10);
    const [lastWin, setLastWin] = useState(70.1);
    const [average, setAverage] = useState(2.21);
    const [rankingNum, setRankingNum] = useState(1);
    /****************************** Functions to call ***********************************/

    const MatchesWillBePlayed = props => {
        return (
            <View>
                <View style={styles.football_lig_number_coin}>
                    <View style={styles.football_lig_number} >

                        <Image source={require('../assets/Football.png')} />
                        <Text style={styles.ligaNames}> {props.ligaName} {props.MatchDate}</Text>
                        <View style={styles.greenBox1} >
                            <Text style={styles.greenBox1_Text}> {props.MatchType} </Text>
                        </View>
                    </View>
                    <View style={styles.coin_number}>
                        <CoinIcon />
                        <Text style={styles.coinNumber}>{props.CoinNum}</Text>
                    </View>
                </View>
                <View style={styles.clubsContainer}>
                    <View style={styles.first_club} >
                        <Text style={styles.clubNames}>{props.ClubName1} </Text>
                        <Image source={props.Image1} />
                    </View>
                    <View style={styles.greenBox2} >
                        <Text style={styles.greenBox2_Text}>VS </Text>
                    </View>
                    <View style={styles.second_club}>
                        <Image source={props.Image2} />
                        <Text style={styles.clubNames}> {props.ClubName2}</Text>
                    </View>
                </View>
                <Text style={styles.time}> {props.timeAgo} önce</Text>
                {props.EndOfIt ? <View style={{marginBottom:10}} /> :  <View style={styles.horizontalDivider} />}
                 
                
            </View>
        );

    }

    const MatchesPlayed = props => {
        return (
            <View>
                <View style={styles.football_lig_number_coin}>
                    <View style={styles.football_lig_number} >
                        <Image source={require('../assets/Football.png')} />
                        <Text style={styles.ligaNames}> {props.ligaName}</Text>
                        <View style={styles.greenBox1} >
                            <Text style={styles.greenBox1_Text}> {props.matchType} </Text>
                        </View>
                    </View>

                </View>
                <View style={styles.clubsContainer}>
                    <View style={styles.first_club} >
                        <Text style={styles.clubNames}>{props.ClubName1} </Text>
                        <Image source={props.Image1} />
                    </View>
                    <View style={styles.greenBox2} >
                        <Text style={styles.greenBox2_Text}>{props.matchResult}</Text>
                    </View>
                    <View style={styles.second_club}>
                        <Image source={props.Image2} />
                        <Text style={styles.clubNames}> {props.ClubName2}</Text>
                    </View>
                </View>
                <View style={styles.checkedMatch}>

                    <Text style={styles.time}>{props.timeAgo} önce</Text>
                    <CheckIcon />
                </View>
                {props.EndOfIt ? <View style={{marginBottom:10}} /> :  <View style={styles.horizontalDivider} />}
            </View>
        );
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.greenContainer}>
                    <View style={styles.arrowShare}>
                        <View style={styles.arrowIcon}>
                            <TouchableOpacity>
                                <ArrowIcon />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.shareIcon}>
                            <TouchableOpacity>
                                <ShareIcon />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.personalContainer}>
                        <View style={styles.image_withName}>
                            <Image style={styles.peronalImage} source={user[0].Image} />
                            <View style={styles.name_subscribers}>
                                <View style={styles.name_country}>
                                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>{user[0].name} </Text>
                                    <View style={styles.country}>
                                        <CountryIcon />
                                    </View>
                                </View>
                                <View style={styles.subscribers}>
                                    <Text style={{ fontSize: 12, color: '#fff', marginTop: 8, fontWeight: '400' }}> {user[0].SubscribersNumber} Takipçi</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.Btns}>
                            <TouchableOpacity>
                                <View style={styles.takipEtBtn}>
                                    <Text style={{ fontSize: 13, color: '#005c00', fontWeight: '500' }}>Takip Et</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.aylikBtn}>
                                    <Text style={{ fontSize: 13, color: '#ffffff', fontWeight: '500', textAlign: 'center' }}>Aylık</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.macDetailsContainer}>
                    <View style={styles.macDetailsContainer_firstColumn}>
                        <Text style={styles.macDetailsContainer_blackText}>Bütün</Text>
                        <Text style={styles.macDetailsContainer_blackText}>Öneriler</Text>
                        <Text style={styles.macDetailsContainer_greenText}>{allOffers}</Text>
                    </View>
                    <View style={styles.verticleLine}></View>

                    <View style={styles.macDetailsContainer_secondColumn}>
                        <Text style={styles.macDetailsContainer_blackText}>7 Günlük</Text>
                        <Text style={styles.macDetailsContainer_blackText}>Öneriler</Text>
                        <Text style={styles.macDetailsContainer_greenText}>{daysOffers} </Text>
                    </View>

                    <View style={styles.verticleLine}></View>

                    <View style={styles.macDetailsContainer_thirdColumn}>
                        <Text style={styles.macDetailsContainer_blackText}>Son 10</Text>
                        <Text style={styles.macDetailsContainer_blackText}>Galibiyet</Text>
                        <Text style={styles.macDetailsContainer_greenText}>{lastWin} %</Text>
                    </View>
                    <View style={styles.verticleLine}></View>

                    <View style={styles.macDetailsContainer_fourthColumn}>
                        <Text style={styles.macDetailsContainer_blackText}>Ortalama</Text>
                        <Text style={styles.macDetailsContainer_blackText}>Oranlar</Text>
                        <Text style={styles.macDetailsContainer_greenText}>{average} </Text>
                    </View>
                </View>
                <View style={styles.dailyWinningContainer}>
                    <View style={styles.footballIcon_text} >
                        <Image source={require('../assets/Football.png')} />
                        <Text style={{ fontWeight: '500', fontSize: 12, marginTop: 3, }}> 30 Günlük Kazanç Oranı :</Text>
                        <Text style={{ fontWeight: '500', color: '#359734', marginTop: 3, }}> No.{rankingNum}</Text>
                    </View>
                    <TouchableOpacity>
                        <DownArrow />
                    </TouchableOpacity>
                </View>

                <View style={styles.futureMacContainer}>
                    <View style={{ padding: 12, }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}> Öne Çıkan Maç</Text>
                    </View>
                    <MatchesWillBePlayed ligaName='Ikinci Lig B' MatchDate='27.03.2022' MatchType='1x2' CoinNum='28' ClubName1='Marchamalo' ClubName2='Alzira' timeAgo='23 saat' Image1={require('../assets/Clubs/Marchamalo.png')} Image2={require('../assets/Clubs/Alzira.png')} EndOfIt={false} />
                    <MatchesWillBePlayed ligaName='Italya Seri C' MatchDate='27.03.2022' MatchType='Toplam Gol' CoinNum='28' ClubName1='Foggia' ClubName2='Campobasso' timeAgo='19 saat' Image1={require('../assets/Clubs/Foggia.png')} Image2={require('../assets/Clubs/Campobasso.png')} EndOfIt={true} />
                </View>
                <View style={styles.playedMatchContainer}>

                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}> Öneri Geçmişi</Text>
                    </View>
                    <MatchesPlayed ligaName='Liga MX' matchType='1x2' ClubName1='Unam' ClubName2='Mazatlan FC' timeAgo='23 saat' matchResult='1-1' Image1={require('../assets/Clubs/Unam.png')} Image2={require('../assets/Clubs/MazatlanFC.png')}
                   EndOfIt={true} 
                   />
                </View>
            </View >
        </ScrollView>
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    greenContainer: {
        backgroundColor: '#005c00',

    },
    arrowShare: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignIthem: 'center',
        marginTop: 10,
        marginHorizontal: 5,
        marginBotoom: 7,

    },
    shareIcon: {
        borderRadius: 20,
        justifyContent: 'center',
        alignIthem: 'center',

    },
    personalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignIthem: 'center',
        marginVertical: 15,
    },
    peronalImage: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        marginRight: 15,
    },
    name_country: {
        flexDirection: 'row',
    },
    name_subscribers: {
        flexDirection: 'column',
    },
    image_withName: {
        flexDirection: 'row',
    },
    Btns: {
        flexDirection: 'column',
        marginLeft: 15,
    },
    takipEtBtn: {
        backgroundColor: '#ffffff',
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 8,
        justifyContent: 'center',
        alignIthem: 'center',
        marginBottom: 8,
    },
    aylikBtn: {
        backgroundColor: '#005c00',
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 8,
        borderColor: '#ffffff',
        borderWidth: 1,
        justifyContent: 'center',
        alignIthem: 'center',
    },
    macDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignIthem: 'center',
        padding: 10,
        marginTop: 15,
        marginHorizontal: 6,
        borderRadius: 15,
        borderColor: '#e7e7e7',
        borderWidth: 1,

    },
    verticleLine: {
        height: '100%',
        width: 1,
        backgroundColor: '#909090',
        opacity: 0.2,
    },
    dailyWinningContainer: {
        flexDirection: 'row',
        backgroundColor: '#e6f5e4',
        alignIthem: 'center',
        justifyContent: 'space-between',
        borderRadius: 15,
        padding: 10,
        marginTop: 15,
        marginHorizontal: 6,
    },
    footballIcon_text: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignIthem: 'center',
    },
    football_lig_number_coin: {
        flexDirection: 'row',
        alignIthem: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        marginBottom: 15,
    },
    football_lig_number: {

        flexDirection: 'row',
        alignIthem: 'center',
        justifyContent: 'center',
    },
    coin_number: {

        flexDirection: 'row',
        alignIthem: 'center',
        justifyContent: 'center',
    },
    futureMacContainer: {
        marginTop: 15,
        marginHorizontal: 6,
        borderRadius: 15,
        borderColor: '#e7e7e7',
        borderWidth: 1,

    },
    clubsContainer: {
        flexDirection: 'row',
        alignIthem: 'center',
        justifyContent: 'space-around',
        marginHorizontal: 30,
    },
    first_club: {
        flexDirection: 'row',

    },
    second_club: {
        flexDirection: 'row',

    },
    playedMatchContainer: {
        marginTop: 15,
        marginHorizontal: 6,
        borderRadius: 15,
        borderColor: '#e7e7e7',
        borderWidth: 1,
    },
    checkedMatch: {
        flexDirection: 'row',
        alignIthem: 'center',
        justifyContent: 'space-between',
        marginRight: 10,
        marginBottom: 10,
    },
    time: {
        fontSize: 10,
        fontWeight: '400',
        marginLeft: 10,
    },
    horizontalDivider: {
        borderBottomColor: '#000',
        opacity: 0.3,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginHorizontal: 12,
        marginVertical: 10,
    },
    coinNumber: {
        color: '#e6c440',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 2,
    },
    greenBox1: {
        backgroundColor: '#c3e5bd',
        borderRadius: 5,
        marginBottom: 5,
        marginLeft: 8,
    },
    greenBox1_Text: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 12,
    },
    greenBox2: {
        backgroundColor: '#005c00',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
    },
    greenBox2_Text: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff',
    },
    clubNames: {
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 2,
        fontSize: 14,
    },
    ligaNames: {
        fontWeight: '500',
        fontSize: 13,
        marginTop: 2,
    },
    macDetailsContainer_blackText: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: '500',
        marginBottom: 1,
    },
    macDetailsContainer_greenText: {
        fontSize: 15,
        color: '#005c00',
        textAlign: 'center',
        fontWeight: 'bold',
    },

})
export default AnalistScreen;

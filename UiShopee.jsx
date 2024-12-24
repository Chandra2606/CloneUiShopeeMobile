import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import Fa from 'react-native-vector-icons/FontAwesome';
import Fa5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Mci from 'react-native-vector-icons/MaterialCommunityIcons';
import Ad from 'react-native-vector-icons/AntDesign';
import Et from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Mi from 'react-native-vector-icons/MaterialIcons';

export default function UiShopee() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.bagianAtas}>
        <TextInput
          placeholder="Cari produk"
          style={{
            borderWidth: 1,
            borderColor: 'gray',
            marginTop: 20,
            borderRadius: 5,
            width: '70%',
            height: 35,
            zIndex: 1,
            position: 'absolute',
            backgroundColor: 'white',
            color: 'black',
            marginLeft: 30,
          }}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            zIndex: 1,
            marginLeft: 320,
            marginTop: 29,
          }}>
          <Feather name="shopping-cart" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            zIndex: 1,
            marginLeft: 350,
            marginTop: 29,
          }}>
          <Ionicon name="chatbubbles-outline" size={20} color="white" />
        </TouchableOpacity>
        <Swiper
          autoplay={true}
          autoplayTimeout={4}
          style={styles.wrapper}
          showsButtons={false}
          dotStyle={styles.dot}
          activeDotStyle={styles.activeDot}>
          <View style={styles.slide}>
            <Image source={require('./image/img1.jpg')} style={styles.image} />
          </View>
          <View style={styles.slide}>
            <Image source={require('./image/img2.jpg')} style={styles.image} />
          </View>
          {/* Add more slides as needed */}
        </Swiper>
      </View>
      <View
        style={{
          width: '90%',
          height: 60,
          backgroundColor: 'white',
          borderRadius: 10,
          position: 'absolute',
          marginTop: 235,
          zIndex: 3,
          flex: 1,
          marginLeft: 20,
          flexDirection: 'row',
        }}>
        <TouchableOpacity style={{justifyContent: 'center', marginLeft: 8}}>
          <Mci name="line-scan" size={27} color="gray"></Mci>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center', marginLeft: 17, marginTop: 9}}>
          <Ad name="wallet" size={19} color="orangered"></Ad>
          <Text style={{fontSize: 10}}>Isi Saldo</Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            marginTop: 17,
            marginLeft: 78,
          }}>
          <Text style={{color: 'black'}}>Rp999</Text>
        </View>
        <TouchableOpacity
          style={{justifyContent: 'center', marginLeft: 55, marginTop: 9}}>
          <Et name="skype-with-circle" size={19} color="gold"></Et>
          <Text style={{fontSize: 10}}>Gratis Koin25RB!</Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            marginTop: 17,
            marginLeft: 282,
          }}>
          <Text style={{color: 'black'}}>Transfer</Text>
        </View>
        <TouchableOpacity
          style={{justifyContent: 'center', marginLeft: 40, marginTop: 9}}>
          <Fontisto name="wallet" size={19} color="red"></Fontisto>
          <Text style={{fontSize: 10}}>Gratis</Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            marginTop: 17,
            marginLeft: 168,
          }}>
          <Text style={{color: 'black'}}>1000</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 280,
          backgroundColor: 'darkred',
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'darkred',
            zIndex: 10,
            width: '100%',
            height: 200,
            marginTop: 60,
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderColor: 'gray',
              borderRadius: 13,
              borderWidth: 1,
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 6,
              }}>
              <Fa name="money" size={25} color="gold"></Fa>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderColor: 'gray',
              borderRadius: 13,
              borderWidth: 1,
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 2,
              }}>
              <Fa name="mobile-phone" size={35} color="darkturquoise"></Fa>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderColor: 'gray',
              borderRadius: 13,
              borderWidth: 1,
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 6,
              }}>
              <Ad name="heart" size={25} color="red"></Ad>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderColor: 'gray',
              borderRadius: 13,
              borderWidth: 1,
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 2,
              }}>
              <Mi name="shopping-bag" size={33} color="red"></Mi>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderColor: 'gray',
              borderRadius: 13,
              borderWidth: 1,
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Ionicon name="wallet" size={27} color="gold"></Ionicon>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'darkred',
            width: '100%',
            height: '100%',
            flex: 1,
            marginBottom: 140,
            marginLeft: 15,
          }}>
          <Text
            style={{
              fontSize: 10,
              width: 70,
              marginTop: 15,
              textAlign: 'center',
              color: 'white',
            }}>
            Gratis Ongkir dan Voucher
          </Text>
          <Text
            style={{
              fontSize: 10,
              width: 70,
              marginTop: 15,
              textAlign: 'center',
              color: 'white',
            }}>
            Pulsa, Tagihan, dan Tiket
          </Text>
          <Text
            style={{
              fontSize: 10,
              width: 70,
              marginTop: 15,
              textAlign: 'center',
              color: 'white',
            }}>
            Shopee Pilih Lokal
          </Text>
          <Text
            style={{
              fontSize: 10,
              width: 70,
              marginTop: 15,
              textAlign: 'center',
              color: 'white',
            }}>
            Shopee Mall
          </Text>
          <Text
            style={{
              fontSize: 10,
              width: 70,
              marginTop: 15,
              textAlign: 'center',
              color: 'white',
            }}>
            SpayLater
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'darkred',
            width: '100%',
            height: 40,
            flex: 1,
            zIndex: 1,
            position: 'absolute',
            marginTop: 170,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderColor: 'gray',
              borderRadius: 13,
              borderWidth: 1,
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 3,
              }}>
              <Ionicon
                name="game-controller"
                size={30}
                color="dodgerblue"></Ionicon>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderColor: 'gray',
              borderRadius: 13,
              borderWidth: 1,
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 2,
              }}>
              <Mci name="food" size={30} color="orangered"></Mci>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderColor: 'gray',
              borderRadius: 13,
              borderWidth: 1,
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 6,
              }}>
              <Fa5 name="mosque" size={25} color="lightblue"></Fa5>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderColor: 'gray',
              borderRadius: 13,
              borderWidth: 1,
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 2,
              }}>
              <Et name="location-pin" size={33} color="orangered"></Et>
            </TouchableOpacity>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              width: 40,
              height: 40,
              borderColor: 'gray',
              borderRadius: 13,
              borderWidth: 1,
              marginLeft: 30,
            }}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                marginTop: 5,
              }}>
              <Fa5 name="box" size={27} color="orangered"></Fa5>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'darkred',
            width: '100%',
            height: 40,
            flex: 1,
            position: 'absolute',
            marginTop: 210,
            zIndex: 1,
            marginLeft: 15,
          }}>
          <Text
            style={{
              fontSize: 10,
              width: 70,
              marginTop: 15,
              textAlign: 'center',
              color: 'white',
            }}>
            Shopee Games
          </Text>
          <Text
            style={{
              fontSize: 10,
              width: 70,
              marginTop: 15,
              textAlign: 'center',
              color: 'white',
            }}>
            ShopeeFood
          </Text>
          <Text
            style={{
              fontSize: 10,
              width: 70,
              marginTop: 15,
              textAlign: 'center',
              color: 'white',
            }}>
            Shopee Barokah
          </Text>
          <Text
            style={{
              fontSize: 10,
              width: 70,
              marginTop: 15,
              textAlign: 'center',
              color: 'white',
            }}>
            ShopeePay Sekitarmu
          </Text>
          <Text
            style={{
              fontSize: 10,
              width: 70,
              marginTop: 15,
              textAlign: 'center',
              color: 'white',
            }}>
            Lihat Semua
          </Text>
        </View>
      </View>
      <View style={{zIndex: 100}}>
        <Image
          source={require('./image/promo.png')}
          style={{
            height: 110,
            width: '100%',
          }}
        />
      </View>
      <View style={styles.live}>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={{color: 'orangered', fontSize: 15, marginLeft: 10}}>
            SHOPEE LIVE
          </Text>
          <TouchableOpacity style={{paddingLeft: 180, flexDirection: 'row'}}>
            <Text>Lihat Semua</Text>
            <Mi name="navigate-next" size={20}></Mi>
          </TouchableOpacity>
        </View>
        <View style={styles.kontenLive}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              source={require('./image/live1.jpg')}
              style={styles.gambarLive}
            />
            <Image
              source={require('./image/live2.jpg')}
              style={styles.gambarLive}
            />
            <Image
              source={require('./image/live3.jpg')}
              style={styles.gambarLive}
            />
            <Image
              source={require('./image/live4.jpg')}
              style={styles.gambarLive}
            />
            <Image
              source={require('./image/live1.jpg')}
              style={styles.gambarLive}
            />
            <Image
              source={require('./image/live2.jpg')}
              style={styles.gambarLive}
            />
            <Image
              source={require('./image/live3.jpg')}
              style={styles.gambarLive}
            />
            <Image
              source={require('./image/live4.jpg')}
              style={styles.gambarLive}
            />
          </ScrollView>
        </View>
      </View>
      <View style={styles.flashSale}>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'orangered',
              fontSize: 15,
              marginLeft: 10,
              fontWeight: 'bold',
            }}>
            FLASH SALE
          </Text>
          <TouchableOpacity style={{paddingLeft: 190, flexDirection: 'row'}}>
            <Text>Lihat Semua</Text>
            <Mi name="navigate-next" size={20}></Mi>
          </TouchableOpacity>
        </View>
        <View style={styles.kontenFs}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image
              source={require('./image/fs1.jpg')}
              style={styles.gambarFs}
            />
            <Image
              source={require('./image/fs2.jpg')}
              style={styles.gambarFs}
            />
            <Image
              source={require('./image/fs3.jpg')}
              style={styles.gambarFs}
            />
            <Image
              source={require('./image/fs4.jpg')}
              style={styles.gambarFs}
            />
            <Image
              source={require('./image/fs1.jpg')}
              style={styles.gambarFs}
            />
            <Image
              source={require('./image/fs2.jpg')}
              style={styles.gambarFs}
            />
            <Image
              source={require('./image/fs3.jpg')}
              style={styles.gambarFs}
            />
            <Image
              source={require('./image/fs4.jpg')}
              style={styles.gambarFs}
            />
          </ScrollView>
        </View>
      </View>
      <View style={styles.rekomendasi}>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'orangered',
              fontSize: 15,
              marginLeft: 10,
              fontWeight: 'bold',
            }}>
            REKOMENDASI
          </Text>
        </View>
        <View style={styles.isiRekomendasi}>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk1.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Sprina set - Pakaian Wanita</Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.114.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                500 Terjual
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk2.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Levane Store - baju wanita</Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.40.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                1RB Terjual
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.isiRekomendasi}>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk3.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Jual Sepatu Sneakers Meow</Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.200.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                2RB Terjual
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk4.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Sepatu Wanita Kanvas </Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.378.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                100 Terjual
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.isiRekomendasi}>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk1.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Sprina set - Pakaian Wanita</Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.114.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                500 Terjual
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk2.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Levane Store - baju wanita</Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.40.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                1RB Terjual
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.isiRekomendasi}>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk3.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Jual Sepatu Sneakers Meow</Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.200.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                2RB Terjual
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk4.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Sepatu Wanita Kanvas </Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.378.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                100 Terjual
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.isiRekomendasi}>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk1.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Sprina set - Pakaian Wanita</Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.114.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                500 Terjual
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk2.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Levane Store - baju wanita</Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.40.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                1RB Terjual
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.isiRekomendasi}>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk3.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Jual Sepatu Sneakers Meow</Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.200.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                2RB Terjual
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.produk}>
            <Image
              source={require('./image/produk4.jpg')}
              style={styles.gambarProduk}
            />
            <Text style={styles.titleProduk}>Sepatu Wanita Kanvas </Text>
            <View style={styles.hargaProduk}>
              <Text
                style={{fontSize: 17, fontWeight: 'bold', color: 'orangered'}}>
                Rp.378.000
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  color: 'black',
                  marginTop: 5,
                  marginLeft: 30,
                }}>
                100 Terjual
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  wrapper: {},
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  dot: {
    backgroundColor: 'white', // Warna dot tidak aktif
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#ff4500', // Warna dot aktif
    width: 8,
    height: 8,
    borderRadius: 6,
  },
  bagianAtas: {
    flexDirection: 'column',
    height: 260,
  },
  live: {
    height: 250,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
  },
  kontenLive: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  gambarLive: {
    height: 200,
    width: 140,
    resizeMode: 'cover',
    marginLeft: 7,
  },
  flashSale: {
    height: 270,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
  },
  kontenFs: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
  },
  gambarFs: {
    height: 200,
    width: 140,
    resizeMode: 'cover',
    marginLeft: 7,
  },
  rekomendasi: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
  },
  isiRekomendasi: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
  },
  produk: {
    height: 240,
    width: 186,
    backgroundColor: 'white',
    marginLeft: 7,
    flexDirection: 'column',
    marginTop: 10,
  },
  gambarProduk: {
    resizeMode: 'cover',
    height: '70%',
    width: '93%',
    marginLeft: 6.5,
  },
  titleProduk: {
    marginLeft: 6.5,
  },
  hargaProduk: {
    marginLeft: 6.5,
    flexDirection: 'row',
    marginTop: 28,
  },
});

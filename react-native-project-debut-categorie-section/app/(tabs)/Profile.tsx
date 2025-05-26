import { Text, View } from '@/components/Themed';
// import { Text } from "@react-navigation/elements";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

// const PlusSection = () => {
// }

export default function Profile() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Mon compte</Text>

        {/* Avatar */}
        <View style={styles.avatarContainer}>
          {/* <Image
            source={require("../../assets/photo_compte.png")}
            style={styles.avatar}
          /> */}
          <TouchableOpacity style={styles.editIcon}>
            <Feather name="edit" size={14} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Mon Profil */}
        <Text style={styles.sectionTitle}>Mon Profil</Text>
        <MenuItem
          icon={<Ionicons name="person-outline" size={20} />}
          label="Mes informations personnelles"
        />
        <MenuItem
          icon={<FontAwesome5 name="credit-card" size={16} />}
          label="Mes modes de paiement"
        />
        <MenuItem
          icon={<Ionicons name="location-outline" size={20} />}
          label="Mes adresses"
        />
        <MenuItem
          icon={<MaterialIcons name="subscriptions" size={20} />}
          label="Mes abonnements"
        />
        <MenuItem
          icon={<Ionicons name="cube-outline" size={20} />}
          label="Mes commandes"
        />
        <MenuItem
          icon={<FontAwesome5 name="gift" size={16} />}
          label="Carte Cadeau / Fidélité"
        />

        {/* Plus */}
        <Text style={styles.sectionTitle}>Plus</Text>
{/* 
        <MenuItem
          icon={<Feather name="info" size={20} />}
          label="FAQ"
          onPress={() => navigation.navigate(screen="FiltreCategorie")}
        /> */}

        <MenuItem icon={<Feather name="info" size={20} />} label="FAQ" />

        <MenuItem
          icon={<MaterialIcons name="gavel" size={20} />}
          label="Mentions légales"
        />
        <MenuItem
          icon={<Feather name="headphones" size={20} />}
          label="Service client"
        />
        <MenuItem
          icon={<Feather name="settings" size={20} />}
          label="Paramètres"
        />
        <MenuItem
          icon={<Feather name="shopping-bag" size={20} />}
          label="Nos boutiques"
        />

        {/* Déconnexion */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </ScrollView>

      
    </View>
  );
}

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem}>
    <View style={styles.icon}>{icon}</View>
    <Text style={styles.menuLabel}>{label}</Text>
  </TouchableOpacity>
);

const NavItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.navItem}>
    <Feather name={icon} size={20} />
    <Text style={styles.navText}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  scroll: { padding: 20, paddingBottom: 100 },
  title: {
    fontSize: 22,
    color: "#b00000",
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 10,
  },
  avatarContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  editIcon: {
    position: "absolute",
    right: 110,
    bottom: 0,
    backgroundColor: "#b00000",
    borderRadius: 20,
    padding: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 20,
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  icon: {
    width: 30,
    alignItems: "center",
  },
  menuLabel: {
    marginLeft: 10,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#b00000",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 0.5,
    borderTopColor: "#ccc",
    backgroundColor: "white",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
  },
  centerBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#b00000",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  centerText: {
    color: "white",
    fontWeight: "bold",
  },
});

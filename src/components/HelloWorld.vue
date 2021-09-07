<template>
  <v-container>
    <v-row justify="center">
      <v-banner class="text-h5"
        >Level <span>{{ currentLevel }}</span> out of <span>4</span></v-banner
      >
    </v-row>

    <v-row>
      <v-col @click="isCarHere('11')" :class="[_11, isActive11]" md="2"></v-col>
      <v-col @click="isCarHere('21')" :class="[_21, isActive21]" md="2"></v-col>
      <v-col @click="isCarHere('31')" :class="[_31, isActive31]" md="2"></v-col>
      <v-col @click="isCarHere('41')" :class="[_41, isActive41]" md="2"></v-col>
      <v-col @click="isCarHere('51')" :class="[_51, isActive51]" md="2"></v-col>
      <v-col @click="isCarHere('61')" :class="[_61, isActive61]" md="2"></v-col>
    </v-row>
    <v-row>
      <v-col @click="isCarHere('12')" :class="[_12, isActive12]" md="2"></v-col>
      <v-col @click="isCarHere('22')" :class="[_22, isActive22]" md="2"></v-col>
      <v-col @click="isCarHere('32')" :class="[_32, isActive32]" md="2"></v-col>
      <v-col @click="isCarHere('42')" :class="[_42, isActive42]" md="2"></v-col>
      <v-col @click="isCarHere('52')" :class="[_52, isActive52]" md="2"></v-col>
      <v-col @click="isCarHere('62')" :class="[_62, isActive62]" md="2"></v-col>
    </v-row>
    <v-row>
      <v-col @click="isCarHere('13')" :class="[_13, isActive13]" md="2"></v-col>
      <v-col @click="isCarHere('23')" :class="[_23, isActive23]" md="2"></v-col>
      <v-col @click="isCarHere('33')" :class="[_33, isActive33]" md="2"></v-col>
      <v-col @click="isCarHere('43')" :class="[_43, isActive43]" md="2"></v-col>
      <v-col @click="isCarHere('53')" :class="[_53, isActive53]" md="2"></v-col>
      <v-col
        @click="isCarHere('63')"
        :class="[_63, isActive63]"
        class="exit-cell"
        md="2"
        ><p>H</p></v-col
      >
    </v-row>
    <v-row>
      <v-col @click="isCarHere('14')" :class="[_14, isActive14]" md="2"></v-col>
      <v-col @click="isCarHere('24')" :class="[_24, isActive24]" md="2"></v-col>
      <v-col @click="isCarHere('34')" :class="[_34, isActive34]" md="2"></v-col>
      <v-col @click="isCarHere('44')" :class="[_44, isActive44]" md="2"></v-col>
      <v-col @click="isCarHere('54')" :class="[_54, isActive54]" md="2"></v-col>
      <v-col @click="isCarHere('64')" :class="[_64, isActive64]" md="2"></v-col>
    </v-row>
    <v-row>
      <v-col @click="isCarHere('15')" :class="[_15, isActive15]" md="2"></v-col>
      <v-col @click="isCarHere('25')" :class="[_25, isActive25]" md="2"></v-col>
      <v-col @click="isCarHere('35')" :class="[_35, isActive35]" md="2"></v-col>
      <v-col @click="isCarHere('45')" :class="[_45, isActive45]" md="2"></v-col>
      <v-col @click="isCarHere('55')" :class="[_55, isActive55]" md="2"></v-col>
      <v-col @click="isCarHere('65')" :class="[_65, isActive65]" md="2"></v-col>
    </v-row>
    <v-row>
      <v-col @click="isCarHere('16')" :class="[_16, isActive16]" md="2"></v-col>
      <v-col @click="isCarHere('26')" :class="[_26, isActive26]" md="2"></v-col>
      <v-col @click="isCarHere('36')" :class="[_36, isActive36]" md="2"></v-col>
      <v-col @click="isCarHere('46')" :class="[_46, isActive46]" md="2"></v-col>
      <v-col @click="isCarHere('56')" :class="[_56, isActive56]" md="2"></v-col>
      <v-col @click="isCarHere('66')" :class="[_66, isActive66]" md="2"></v-col>
    </v-row>

    <v-row justify="center" style="padding-top: 10px">
      <v-btn
        style="margin-right: 20px"
        color="primary"
        @click="initiate(currentLevel)"
        >Start this level again</v-btn
      >

      <v-btn color="primary" @click="initiate(1)" v-show="currentLevel > 1"
        >Start again at Level 1</v-btn
      >
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="290" @input="goToNextLevel">
        <v-card>
          <v-card-title class="text-h5"> Congratulations!!! </v-card-title>

          <v-card-text v-if="currentLevel < 4">
            You have completed level {{ currentLevel }}.
          </v-card-text>
          <v-card-text v-else> You have completed the game! </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              v-if="currentLevel < 4"
              color="green darken-1"
              text
              @click="goToNextLevel"
            >
              Go To Next Level
            </v-btn>
            <v-btn v-else color="green darken-1" text @click="goToNextLevel">
              Start Again at Level 1
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row justify="center">
      <v-dialog v-model="helpDialog" max-width="600" @input="closeHelpDialog">
        <v-card>
          <v-card-title class="text-h5"> HOW TO PLAY </v-card-title>

          <v-card-text>
            <div>
              <h3>The Object:</h3>
              Clear the path so the ambulance(gray car) can get to the hospital.
            </div>

            <div>
              <h3>To Play:</h3>
              Click on a vehicle then click on an open space to move it to a new
              location. Horizontal vehicles go sideways while vertical vehicles
              only go up and down.
            </div>
            <div>
              <h3>Other:</h3>
              Try to complete all 40 levels if you can. Your progress will be
              saved so you can come back later.
            </div>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click="closeHelpDialog"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { Car } from "../myclass.js";
import { MyFunctions } from "../myjavascript.js";

export default {
  name: "HelloWorld",
  props: ["helpDialog"],

  data: () => ({
    // isActive: false,
    currentCar: "",
    cars: [],
    startPosition: "", // clicking on a cell changes state to "moveCar" if one is there, if "moveCar" and click on another free cell then move car.
    currentLevel: 1,
    dialog: false,
    // helpDialog: false,
  }),
  created() {},
  mounted() {
    //if the user has played before load the appropriate level
    if (localStorage.currentLevel)
      this.currentLevel = parseInt(localStorage.currentLevel);
    this.initiate(this.currentLevel);
  },
  computed: {
    _11: function () {
      return MyFunctions.addCarToCell("11", this.cars);
    },
    _21: function () {
      return MyFunctions.addCarToCell("21", this.cars);
    },
    _31: function () {
      return MyFunctions.addCarToCell("31", this.cars);
    },
    _41: function () {
      return MyFunctions.addCarToCell("41", this.cars);
    },
    _51: function () {
      return MyFunctions.addCarToCell("51", this.cars);
    },
    _61: function () {
      return MyFunctions.addCarToCell("61", this.cars);
    },
    _12: function () {
      return MyFunctions.addCarToCell("12", this.cars);
    },
    _22: function () {
      return MyFunctions.addCarToCell("22", this.cars);
    },
    _32: function () {
      return MyFunctions.addCarToCell("32", this.cars);
    },
    _42: function () {
      return MyFunctions.addCarToCell("42", this.cars);
    },
    _52: function () {
      return MyFunctions.addCarToCell("52", this.cars);
    },
    _62: function () {
      return MyFunctions.addCarToCell("62", this.cars);
    },
    _13: function () {
      return MyFunctions.addCarToCell("13", this.cars);
    },
    _23: function () {
      return MyFunctions.addCarToCell("23", this.cars);
    },
    _33: function () {
      return MyFunctions.addCarToCell("33", this.cars);
    },
    _43: function () {
      return MyFunctions.addCarToCell("43", this.cars);
    },
    _53: function () {
      return MyFunctions.addCarToCell("53", this.cars);
    },
    _63: function () {
      return MyFunctions.addCarToCell("63", this.cars);
    },
    _14: function () {
      return MyFunctions.addCarToCell("14", this.cars);
    },
    _24: function () {
      return MyFunctions.addCarToCell("24", this.cars);
    },
    _34: function () {
      return MyFunctions.addCarToCell("34", this.cars);
    },
    _44: function () {
      return MyFunctions.addCarToCell("44", this.cars);
    },
    _54: function () {
      return MyFunctions.addCarToCell("54", this.cars);
    },
    _64: function () {
      return MyFunctions.addCarToCell("64", this.cars);
    },
    _15: function () {
      return MyFunctions.addCarToCell("15", this.cars);
    },
    _25: function () {
      return MyFunctions.addCarToCell("25", this.cars);
    },
    _35: function () {
      return MyFunctions.addCarToCell("35", this.cars);
    },
    _45: function () {
      return MyFunctions.addCarToCell("45", this.cars);
    },
    _55: function () {
      return MyFunctions.addCarToCell("55", this.cars);
    },
    _65: function () {
      return MyFunctions.addCarToCell("65", this.cars);
    },
    _16: function () {
      return MyFunctions.addCarToCell("16", this.cars);
    },
    _26: function () {
      return MyFunctions.addCarToCell("26", this.cars);
    },
    _36: function () {
      return MyFunctions.addCarToCell("36", this.cars);
    },
    _46: function () {
      return MyFunctions.addCarToCell("46", this.cars);
    },
    _56: function () {
      return MyFunctions.addCarToCell("56", this.cars);
    },
    _66: function () {
      return MyFunctions.addCarToCell("66", this.cars);
    },
    isActive11: function () {
      return MyFunctions.isActiveCell("11", this.cars);
    },
    isActive21: function () {
      return MyFunctions.isActiveCell("21", this.cars);
    },
    isActive31: function () {
      return MyFunctions.isActiveCell("31", this.cars);
    },
    isActive41: function () {
      return MyFunctions.isActiveCell("41", this.cars);
    },
    isActive51: function () {
      return MyFunctions.isActiveCell("51", this.cars);
    },
    isActive61: function () {
      return MyFunctions.isActiveCell("61", this.cars);
    },
    isActive12: function () {
      return MyFunctions.isActiveCell("12", this.cars);
    },
    isActive22: function () {
      return MyFunctions.isActiveCell("22", this.cars);
    },
    isActive32: function () {
      return MyFunctions.isActiveCell("32", this.cars);
    },
    isActive42: function () {
      return MyFunctions.isActiveCell("42", this.cars);
    },
    isActive52: function () {
      return MyFunctions.isActiveCell("52", this.cars);
    },
    isActive62: function () {
      return MyFunctions.isActiveCell("62", this.cars);
    },
    isActive13: function () {
      return MyFunctions.isActiveCell("13", this.cars);
    },
    isActive23: function () {
      return MyFunctions.isActiveCell("23", this.cars);
    },
    isActive33: function () {
      return MyFunctions.isActiveCell("33", this.cars);
    },
    isActive43: function () {
      return MyFunctions.isActiveCell("43", this.cars);
    },
    isActive53: function () {
      return MyFunctions.isActiveCell("53", this.cars);
    },
    isActive63: function () {
      return MyFunctions.isActiveCell("63", this.cars);
    },
    isActive14: function () {
      return MyFunctions.isActiveCell("14", this.cars);
    },
    isActive24: function () {
      return MyFunctions.isActiveCell("24", this.cars);
    },
    isActive34: function () {
      return MyFunctions.isActiveCell("34", this.cars);
    },
    isActive44: function () {
      return MyFunctions.isActiveCell("44", this.cars);
    },
    isActive54: function () {
      return MyFunctions.isActiveCell("54", this.cars);
    },
    isActive64: function () {
      return MyFunctions.isActiveCell("64", this.cars);
    },
    isActive15: function () {
      return MyFunctions.isActiveCell("15", this.cars);
    },
    isActive25: function () {
      return MyFunctions.isActiveCell("25", this.cars);
    },
    isActive35: function () {
      return MyFunctions.isActiveCell("35", this.cars);
    },
    isActive45: function () {
      return MyFunctions.isActiveCell("45", this.cars);
    },
    isActive55: function () {
      return MyFunctions.isActiveCell("55", this.cars);
    },
    isActive65: function () {
      return MyFunctions.isActiveCell("65", this.cars);
    },
    isActive16: function () {
      return MyFunctions.isActiveCell("16", this.cars);
    },
    isActive26: function () {
      return MyFunctions.isActiveCell("26", this.cars);
    },
    isActive36: function () {
      return MyFunctions.isActiveCell("36", this.cars);
    },
    isActive46: function () {
      return MyFunctions.isActiveCell("46", this.cars);
    },
    isActive56: function () {
      return MyFunctions.isActiveCell("56", this.cars);
    },
    isActive66: function () {
      return MyFunctions.isActiveCell("66", this.cars);
    },
  },
  watch: {},
  methods: {
    // load all the cars into the systme for this level
    initiate: function (level) {
      this.cars = [];
      localStorage.currentLevel = level;
      this.currentLevel = level;
      switch (level) {
        case 1:
          this.cars.push(new Car(3, 1, "v", 2, "green-car"));
          this.cars.push(new Car(4, 2, "h", 3, "orange-car"));
          this.cars.push(new Car(3, 3, "h", 2, "white-car"));
          this.cars.push(new Car(5, 3, "v", 2, "pink-car"));
          this.cars.push(new Car(5, 5, "v", 3, "blue-car"));
          break;
        case 2:
          this.cars.push(new Car(3, 3, "h", 2, "white-car"));
          this.cars.push(new Car(5, 1, "v", 3, "orange-car"));
          this.cars.push(new Car(3, 5, "v", 2, "green-car"));
          this.cars.push(new Car(4, 5, "h", 3, "red-car"));
          break;
        case 3:
          this.cars.push(new Car(1, 3, "h", 2, "white-car"));
          this.cars.push(new Car(5, 1, "v", 3, "orange-car"));
          this.cars.push(new Car(1, 4, "v", 3, "red-car"));
          this.cars.push(new Car(2, 4, "h", 2, "green-car"));
          this.cars.push(new Car(4, 4, "h", 2, "orange-car"));
          break;
        case 4:
          this.cars.push(new Car(1, 3, "h", 2, "white-car"));
          this.cars.push(new Car(3, 1, "v", 2, "green-car"));
          this.cars.push(new Car(3, 3, "v", 2, "red-car"));
          this.cars.push(new Car(3, 5, "h", 3, "red-car"));
          this.cars.push(new Car(6, 4, "v", 3, "orange-car"));
          break;
        case 5:
          break;
      }
    },
    // check to see if there is a car in this cell
    // if a car is there then 'load' this car
    // if a car is not in this cell and a car has been loaded, check to see if it can move here and then do it
    isCarHere: function (location) {
      console.log(this.startPosition, "this.startPosition");
      let FINISHINGCELL = "63";
      if (
        !MyFunctions.hasACarBeenLoadedAlready(
          location,
          this.startPosition,
          this.cars
        )
      ) {
        this.startPosition = location;
        console.log("A car has been loaded");
      } else {
        //if able to move car and is the end of the level, go to the next level
        if (MyFunctions.tryToMoveCar(location, this.startPosition, this.cars)) {
          if (location === FINISHINGCELL) {
            this.dialog = true;
          }
        }
        this.startPosition = "";
      }
    },
    goToNextLevel: function () {
      this.dialog = false;
      this.currentLevel++;
      localStorage.currentLevel = this.currentLevel;
      this.cars.length = 0;
      if (this.currentLevel < 5) this.initiate(this.currentLevel);
      else {
        this.currentLevel = 1;
        localStorage.currentLevel = 1;
        this.initiate(this.currentLevel);
      }
    },
    closeHelpDialog: function () {
      this.$emit("closeHelpDialog");
    },
  },
};
</script>

<style scoped>
span {
  color: green;
}
.container {
  padding-top: 20px;
  /*  border: black solid 5px;*/
}
.col {
  border: black dotted 1px;
}
.row {
  height: 80px;
  padding-left: 10px;
  padding-right: 10px;
}
p {
  padding: 0px;
  margin: 0px;
}
.exit-cell {
  text-align: center;
  vertical-align: center;
  font-size: 20px;
  color: white !important;
  background-color: black;

  animation: blinker 2s linear infinite;
}
@keyframes blinker {
  50% {
    opacity: 0.5;
  }
}
.red-car {
  background-color: red;
}
.blue-car {
  background-color: blue;
}
.white-car {
  background-color: gray;
}
.orange-car {
  background-color: orange;
}
.green-car {
  background-color: green;
}
.pink-car {
  background-color: pink;
}
.is-active-cell {
  border: yellow dotted 5px;
}
</style>
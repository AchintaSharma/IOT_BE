import json

def main() :
    data = {
        "temperature" : "31 degC",
        "weight" : "200kgs",
        "ambientTemp" : "32 degC",
        "camera1FilePath" : "locationX",
        "camera2FilePath" : "locationY",
        "camera3FilePath" : "locationZ",
        "camera4FilePath" : "locationA"
    }
    return data;

data = main();

dataOutput = json.dumps(data);

print(dataOutput);
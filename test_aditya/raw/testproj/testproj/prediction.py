import pickle as pkl
import numpy as np
# import sklearn

# pkl.dump({3:1}, open("RFC_model2.pkl", "wb"))

rfc = pkl.load(open("RFC_model.pkl", "rb"))
symps = pkl.load(open("symptoms.pkl", "rb"))
dis_ind = pkl.load(open("dis_indices.pkl", "rb"))

def Input_Prediction(given_symps):
    symps_dict = dict.fromkeys(symps, 0)
    # print("Before: ", symps_dict)

    # given_symps = ['skin_rash', 'nodal_skin_eruptions', 'dischromic_patches']
    for i in range (len(given_symps)):
        symps_dict[ given_symps[i]] =1

    lt = list (symps_dict.values()) 
    arr = np.array(lt)
    if( len(arr)>132 ):
        print("Wrong input")
        return -1
    arr= arr.reshape(1,-1)
    # print(arr.shape)
    # print(arr)
    return dis_ind[rfc.predict(arr)[0]]

# print(Input_Prediction(['acidity', 'stomach_pain', 'ulcers_on_tongue']))
import React, { useState, useEffect } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { FOLLOWUPAdd, FOLLOWUPGet, SETFOLLOWUPObj, FOLLOWUPUpdate, FOLLOWUPDelete } from "../../redux/actions/FollowUp/FollowUp.actions";
import { DEMOGRAFICGet } from "../../redux/actions/Demografic/Demografic.actions";
export const Addfollowup = () => {

    useEffect(() => {
        dispatch(DEMOGRAFICGet());
    }, []);

    const [searchParams, setSearchParams] = useSearchParams("edit");
    const [patientId, setPatientId] = useState("");
    
    

    const [hb, setHb] = useState("");
    const [hbsAg, setHbsAg] = useState("");
    const [pcv, setPcv] = useState("");
    const [mcv, setMcv] = useState("");
    const [antiHcv, setAntiHcv] = useState("");
    const [tlc, setTlc] = useState("");
    const [hiv, setHiv] = useState("");
    const [ebvVcaLgm, setEbvVcaLgm] = useState("");
    const [plt, setPlt] = useState("");
    const [ebvVcaLgg, setEbvVcaLgg] = useState("");
    const [esr, setEsr] = useState("");
    const [ebvEbnaLgg, setEbvEbnaLgg] = useState("");
    const [crpQuantitative, setCrpQuantitative] = useState("");
    const [cmvLgm, setCmvLgm] = useState("");
    const [ast, setAst] = useState("");
    const [cmvLgg, setCmvLgg] = useState("");
    const [alt, setAlt] = useState("");
    const [fecalCalprotectin, setFecalCalprotectin] = useState("");
    const [pct, setPct] = useState("");
    const [ggt, setGgt] = useState("");
    const [cpk, setCpk] = useState("");
    const [totalProtien, setTotalProtien] = useState("");
    const [sodium, setSodium] = useState("");
    const [cholesterol, setCholesterol] = useState("");
    const [pottasium, setPottasium] = useState("");
    const [vldl, setVldl] = useState("");
    const [cmvIhc, setCmvIhc] = useState("");
    const [ldl, setLdl] = useState("");
    const [eberIsh, setEberIsh] = useState("");
    const [hdl, setHdl] = useState("");
    const [igra, setIgra] = useState("");
    const [triglycerides, setTriglycerides] = useState("");
    const [alp, setAlp] = useState("");
    const [stoolRoutine, setStoolRoutine] = useState("");
    const [albumin, setAlbumin] = useState("");
    const [stoolCulture, setStoolCulture] = useState("");
    const [iron, setIron] = useState("");
    const [stoolGdh, setStoolGdh] = useState("");
    const [tibc, setTibc] = useState("");
    const [stoolcDiffToxin, setStoolcDiffToxin] = useState("");
    const [ferritin, setFerritin] = useState("");
    const [stoolcDiffPcr, setStoolcDiffPcr] = useState("");
    const [calcium, setCalcium] = useState("");
    const [stoolBiofilm, setStoolBiofilm] = useState("");
    const [magnesium, setMagnesium] = useState("");
    const [tpmt, setTpmt] = useState("");
    const [vitamind, setVitamind] = useState("");
    const [ndut, setNdut] = useState("");
    const [rbs, setRbs] = useState("");
    const [tgn, setTgn] = useState("");
    const [ascaLgat, setAscaLgat] = useState("");
    const [mmpr, setMmpr] = useState("");
    const [ascaLgg, setAscaLgg] = useState("");
    const [vitaminB12, setVitaminB12] = useState("");
    const [pAnca, setPAnca] = useState("");
    const [folate, setFolate] = useState("");
    const [urea, setUrea] = useState("");
    const [vzvAntibody, setVzvAntibody] = useState("");
    const [creatinine, setCreatinine] = useState("");
    const [chestXray, setChestXray] = useState("");
    const [xrayAbdomen, setXrayAbdomen] = useState("");
    const [mantoux, setMantoux] = useState("");
    const [microbiota, setMicrobiota] = useState("");
    const [ctAbdomen, setCtAbdomen] = useState("");
    const [ctChest, setCtChest] = useState("");
    const [mriAbdomen, setMriAbdomen] = useState("");
    const [others, setOthers] = useState("");
    const [rectalSteroids, setRectalSteroids] = useState("No");
    const [specify, setSpecify] = useState("");

    const dispatch = useDispatch();
    const followupObj = useSelector((states) => states.followup.followupObj);
    const patientArr = useSelector((states) => states.demografic.demografics);

    const handleAddFollowUp = () => {
        let obj = {
            patientId,
            patientName,
            ccfIdName,
            followupDate,
            diseaseExtend,
            stoolFreq,
            rectalBleeding,
            findEndoscope,
            phyAssess1,
            mayoScore1,
            mayoScore2,
            mayoScore3,
            phyAssess2,
            phyAssess3,
            phyAssess4,
            totalScore1,
            bowelDay,
            height,
            bowelNight,
            weight,
            genwellBeing,
            bmi,
            urgencyDef,
            handgrip,
            bloodStool,
            nancyIndex,
            extracolonic,
            rhi,
            totalScore2,
            geboeScore,
            mirt,
            must,
            tricepSkin,
            totalBodyFat,
            visceral,
            restingMetabol,
            bodyAge,
            subcutWholebody,
            subcutTrunk,
            subcutArms,
            subcutLegs,
            skeltalWhole,
            skeltalTrunk,
            skeltalArms,
            skeltalLegs,
            midarmCircum,
            skeltalMuscle,
            mercuriStage,
            meanAttenuation,
            hb,
            tgn,
            mcv,
            mmpr,
            plt,
            ast,
            // hscrp,
            alt,
            albumin,
            alp,
            // esp,
            // stoolcdiff,
            // fecalCalpro,
            stoolRoutine,
            ferritin,
            ebvca,
            cmvIgm,
            oralAsa,
            adalimumab,
            rectalAsa,
            vedolizumab,
            aza,
            // cycloporine,
            mp,
            ustekinumab,
            prednisolone,
            tofacitinib,
            budesonide,
            tacrolimus,
            rectalSteroid,
            filgotinib,
            // infliximab,
            probiotics,
            session1,
            session2,
            session3,
            session4,
            session5,
            session6,
            session7,
            session8,
            session9,
            session10,
            session11,
            session12,
            surgery,
            ifSurgery,
            adverseAsa,
            adverseSteroids,
            adverseInfliximab,
            adverseTofacitinib,
            adverseAza,
        }
        if (followupObj?._id) {
            dispatch(FOLLOWUPUpdate(followupObj._id, obj));
            toast.success("Follow up updated")
        } else {
            dispatch(FOLLOWUPAdd(obj));
            dispatch(SETFOLLOWUPObj(null))
            toast.success("Follow up Added")
        }
    };

    useEffect(() => {
        if (followupObj) {

            // console.log(followupObj?.patientId,"followupObj?.patientI")
            setPatientId(followupObj?.patientId);
            setPatientName(followupObj?.patientName);
            setCcfIdName(followupObj?.ccfIdName);
            setFollowupDate(followupObj?.followupDate);
            setDiseaseExtend(followupObj?.diseaseExtend);
            setStoolFreq(followupObj?.stoolFreq);
            setRectalBleeding(followupObj?.rectalBleeding);
            setFindEndoscope(followupObj?.findEndoscope);
            setPhyAssess1(followupObj?.phyAssess1);
            setMayoScore1(followupObj?.mayoScore1);
            setMayoScore2(followupObj?.mayoScore2);
            setMayoScore3(followupObj?.mayoScore3);
            setPhyAssess2(followupObj?.phyAssess2);
            setPhyAssess3(followupObj?.phyAssess3);
            setPhyAssess4(followupObj?.phyAssess4);
            setTotalScore1(followupObj?.totalScore1);
            setBowelDay(followupObj?.bowelDay);
            setHeight(followupObj?.height);
            setBowelNight(followupObj?.bowelNight);
            setWeight(followupObj?.weight);
            setGenwellBeing(followupObj?.genwellBeing);
            setBmi(followupObj?.bmi);
            setUrgencyDef(followupObj?.urgencyDef);
            setHandgrip(followupObj?.handgrip);
            setBloodStool(followupObj?.bloodStool);
            setNancyIndex(followupObj?.nancyIndex);
            setExtracolonic(followupObj?.extracolonic);
            setRhi(followupObj?.rhi)
            setTotalScore2(followupObj?.totalScore2);
            setGeboeScore(followupObj?.geboeScore);
            setMirt(followupObj?.mirt);
            setMust(followupObj?.must);
            setTricepSkin(followupObj?.tricepSkin);
            setTotalBodyFat(followupObj?.totalBodyFat);
            setVisceral(followupObj?.visceral);
            setRestingMetabol(followupObj?.restingMetabol);
            setBodyAge(followupObj?.bodyAge);
            setSubcutWholebody(followupObj?.subcutWholebody);
            setSubcutTrunk(followupObj?.subcutTrunk);
            setSubcutArms(followupObj?.subcutArms);
            setSubcutLegs(followupObj?.subcutLegs);
            setSkeltalWhole(followupObj?.skeltalWhole);
            setSkeltalTrunk(followupObj?.skeltalTrunk);
            setSkeltalArms(followupObj?.skeltalArms);
            setSkeltalLegs(followupObj?.skeltalLegs);
            setMidarmCircum(followupObj?.midarmCircum);
            setSkeltalMuscle(followupObj?.skeltalMuscle);
            setMercuriStage(followupObj?.mercuriStage);
            setMeanAttenuation(followupObj?.meanAttenuation);
            setHb(followupObj?.hb)
            setTgn(followupObj?.tgn)
            setMcv(followupObj?.mcv)
            setMmpr(followupObj?.mmpr)
            setPlt(followupObj?.plt)
            setAst(followupObj?.ast)
            // setHscrp(followupObj?.hscrp)
            setAlt(followupObj?.alt)
            setAlbumin(followupObj?.albumin)
            setAlp(followupObj?.alp)
            // setEsp(followupObj?.esp)
            // setStoolcdiff(followupObj?.stoolcdiff);
            // setFecalCalpro(followupObj?.fecalCalpro);
            setStoolRoutine(followupObj?.stoolRoutine);
            setFerritin(followupObj?.ferritin);
            setEbvca(followupObj?.ebvca);
            setCmvIgm(followupObj?.cmvIgm);
            setOralAsa(followupObj?.oralAsa);
            setAdalimumab(followupObj?.adalimumab);
            setRectalAsa(followupObj?.rectalAsa);
            setVedolizumab(followupObj?.vedolizumab);
            setAza(followupObj?.aza);
            setCycloporine(followupObj?.cycloporine);
            setMp(followupObj?.mp);
            setUstekinumab(followupObj?.ustekinumab);
            setPrednisolone(followupObj?.prednisolone);
            setTofacitinib(followupObj?.tofacitinib);
            setBudesonide(followupObj?.budesonide);
            setTacrolimus(followupObj?.tacrolimus);
            setRectalSteroid(followupObj?.rectalSteroid);
            setFilgotinib(followupObj?.filgotinib);
            setInfliximab(followupObj?.infliximab);
            setProbiotics(followupObj?.probiotics);
            setSession1(followupObj?.session1);
            setSession2(followupObj?.session2);
            setSession3(followupObj?.session3);
            setSession4(followupObj?.session4);
            setSession5(followupObj?.session5);
            setSession6(followupObj?.session6);
            setSession7(followupObj?.session7);
            setSession8(followupObj?.session8);
            setSession9(followupObj?.session9);
            setSession10(followupObj?.session10);
            setSession11(followupObj?.session11);
            setSession12(followupObj?.session12);
            setSurgery(followupObj?.surgery);
            setIfSurgery(followupObj?.ifSurgery);
            setAdverseAsa(followupObj?.adverseAsa);
            setAdverseSteroids(followupObj?.adverseSteroids);
            setAdverseInfliximab(followupObj?.adverseInfliximab);
            setAdverseTofacitinib(followupObj?.adverseTofacitinib);
            setAdverseAza(followupObj?.adverseAza);

        }
    }, [followupObj]);

    useEffect(() => {
        console.log(searchParams.get("edit"), "edit");
        if (!searchParams.get("edit") || !searchParams.get("edit") == "true") {
            dispatch(SETFOLLOWUPObj(null))
        }
    }, [searchParams.get("edit")])

    const handlePatient = (patientId) => {
        setPatientId(patientId)
        if (patientId) {
            let patientNewName = patientArr.find(el => el._id == patientId);
            let namePatient = patientNewName?.patientName;
            let ccfId = patientNewName?.ccfId;
            setPatientName(namePatient);
            setCcfIdName(ccfId);
            // console.log(namePatient , "patientName");
        }
    }

    const options = [
        { value: "select", label: "Select" },
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];

    const replaceDrop = [
        { value: "select", label: "Select" },
        { value: "Poor compliance", label: "Poor compliance" },
        { value: "Travel", label: "Travel" },
        { value: "NSAIDs", label: "NSAIDs" },
        { value: "Antibiotics", label: "Antibiotics" },
        { value: "Alternative medicines", label: "Alternative medicines" },
        { value: "Infections", label: "Infections" },
        { value: "Diet indiscretions", label: "Diet indiscretions" },
        { value: "Stress", label: "Stress" },
        { value: "Unaccustomed exercise", label: "Unaccustomed exercise" },
        { value: "Alcohol", label: "Alcohol" },
        { value: "Smoking", label: "Smoking" },
        { value: "Opium", label: "Opium" },
        { value: "Others", label: "Others" },
    ];

    const stoolFreqDrop = [
        { value: "select", label: "Select" },
        { value: "Normal no. of stools", label: "Normal no. of stools" },
        { value: "1 to 2 stools more than normal", label: "1 to 2 stools more than normal" },
        { value: "3 to 4 stools more than normal", label: "3 to 4 stools more than normal" },
        { value: "5 or more stools more than normal", label: "5 or more stools more than normal" },
    ];
    const recBleedDrop = [
        { value: "select", label: "Select" },
        { value: "No blood seen", label: "No blood seen" },
        { value: "Streaks of blood with stool less than half the time", label: "Streaks of blood with stool less than half the time" },
        { value: "Obvious blood with stool most of the time", label: "Obvious blood with stool most of the time" },
        { value: "Blood alone passes", label: "Blood alone passes" },
    ];
    const endoscopyDrop = [
        { value: "select", label: "Select" },
        { value: "Normal or inactive disease", label: "Normal or inactive disease" },
        { value: "Mild disease(erythema,decreased vascular pattern,friability", label: "Mild disease(erythema,decreased vascular pattern,friability)" },
        { value: "Marked erythema,lack of vascular pattern,friability erosions", label: "Marked erythema,lack of vascular pattern,friability erosions)" },
        { value: "Severe disease(Spontaneous bleeding,ulceration)", label: "Severe disease(Spontaneous bleeding,ulceration)" },
    ];
    const gloAccessDrop = [
        { value: "select", label: "Select" },
        { value: "Normal", label: "Normal" },
        { value: "Mild disease", label: "Mild disease" },
        { value: "Moderate disease", label: "Moderate disease" },
        { value: "Severe disease", label: "Severe disease" },
    ];
    const vascularDrop = [
        { value: "select", label: "Select" },
        { value: "normal ", label: "Normal" },
        { value: "Patchy obliteration", label: "Patchy obliteration" },
        { value: "Obliterated", label: "Obliterated" },
    ];
    const bleedingDrop = [
        { value: "select", label: "Select" },
        { value: "None ", label: "None" },
        { value: "Mucosal ", label: "Mucosal " },
        { value: "Luminal mild ", label: "Luminal mild" },
        { value: "Luminal moderate or severe", label: "Luminal moderate or severe" },
    ];
    const erosinsDrop = [
        { value: "select", label: "Select" },
        { value: "None", label: "None " },
        { value: "Erosions", label: "Erosions" },
        { value: "Superficial ulcer ", label: "Superficial ulcer" },
        { value: "Deep ulcer", label: "Deep ulcer " },
    ];
    const bowldayDrop = [
        { value: "select", label: "Select" },
        { value: "1-3", label: "1-3 " },
        { value: "4-7", label: "4-7 " },
        { value: "7-9", label: "7-9 " },
        { value: ">9", label: ">9 " },
    ];
    const bowlnightDrop = [
        { value: "select", label: "Select" },
        { value: "0", label: "0" },
        { value: "1-3", label: "1-3 " },
        { value: "4-6", label: "4-6 " },
    ];
    const wellBeingDrop = [
        { value: "select", label: "Select" },
        { value: "Very Well", label: "Very Well" },
        { value: "Slightly Below Par", label: "Slightly Below Par " },
        { value: "Poor", label: "Poor " },
        { value: "Very Poor", label: "Very Poor " },
        { value: "Terrible", label: "Terrible " },
    ];
    const urgencyDrop = [
        { value: "select", label: "Select" },
        { value: "none", label: "None" },
        { value: "hurry", label: "Hurry" },
        { value: "immediately", label: "Immediately " },
        { value: "incontinence", label: "Incontinence" },
    ];
    const bloodStoolDrop = [
        { value: "select", label: "Select" },
        { value: "none", label: "None" },
        { value: "hurry", label: "Trace" },
        { value: "ocassionlly Frank", label: "Ocassionlly Frank" },
        { value: "usually Frank", label: "Usually Frank" },
    ];
    const extracolonicDrop = [
        { value: "select", label: "Select" },
        { value: "Uvetis", label: "Uvetis" },
        { value: "Trace", label: "Trace" },
        { value: "Pyoderma Gangrenosum ", label: "Pyoderma Gangrenosum " },
        { value: "erythema nodusum", label: "Erythema Nodusum " },
        { value: "arthropathy", label: "Arthropathy " },
    ];
    const oralAsaDrop = [
        { value: "Select", label: "Select" },
        { value: "1.2", label: "1.2" },
        { value: "2.4", label: "2.4" },
        { value: "3.6", label: "3.6" },
        { value: "4.8", label: "4.8" },
    ];
    const rectalAsaDrop = [
        { value: "Select", label: "Select" },
        { value: "500gm", label: "500gm" },
        { value: "1gm", label: "1gm" },
    ];
    const azaDrop = [
        { value: "Select", label: "Select" },
        { value: "25", label: "25" },
        { value: "50", label: "50" },
        { value: "75", label: "75" },
        { value: "100", label: "100" },
        { value: "125", label: "125" },
        { value: "150", label: "150" },
        { value: "175", label: "175" },
    ];
    const mpDrop = [
        { value: "Select", label: "Select" },
        { value: "50", label: "50" },
        { value: "100", label: "100" },
        { value: "150", label: "150" },
    ];
    const predenisoloniDrop = [
        { value: "Select", label: "Select" },
        { value: "5", label: "5" },
        { value: "10", label: "10" },
        { value: "15", label: "15" },
        { value: "20", label: "20" },
        { value: "25", label: "25" },
        { value: "30", label: "30" },
        { value: "40", label: "40" },
        { value: "60", label: "60" },
    ];
    const budesonideDrop = [
        { value: "Select", label: "Select" },
        { value: "3", label: "3" },
        { value: "6", label: "6" },
        { value: "9", label: "9" },
    ];
    const tofacitinibDrop = [
        { value: "select", label: "Select" },
        { value: "5", label: "5" },
        { value: "10", label: "10" },
        { value: "20", label: "20" },
    ];
    const infliximabDrop = [
        { value: "", label: "Select" },
        { value: "5 mg/kg", label: "5 mg/kg" },
        { value: "10 mg/kg", label: "10 mg/kg" },
    ];
    const adverseAsaDrop = [
        { value: "", label: "Select" },
        { value: "Paradoxical Diarrhea", label: "Paradoxical Diarrhea" },
        { value: "AKI", label: "AKI" },
        { value: "Pneumonitis", label: "Pneumonitis" },
        { value: "Pancreatitis", label: "Pancreatitis" },
        { value: "Male Infertility", label: "Male Infertility" },
        { value: "Others", label: "Others" },
    ];
    const adverseSteroidDrop = [
        { value: "", label: "Select" },
        { value: "Weight gain", label: "Weight gain" },
        { value: "Osteoporosis", label: "Osteoporosis" },
        { value: "Hypokalemia", label: "Hypokalemia" },
        { value: "Oral Candidiasis", label: "Oral Candidiasis" },
        { value: "Other infection", label: "Other infection" },
        { value: "High blood sugar", label: "High blood sugar" },
        { value: "Hirsutism", label: "Hirsutism" },
        { value: "Depression", label: "Depression" },
        { value: "Fatigue", label: "Fatigue" },
        { value: "Striae", label: "Striae" },
        { value: "Others", label: "Others" },
    ];
    const adverseInfliDrop = [
        { value: "", label: "Select" },
        { value: "Infusion reaction", label: "Infusion reaction" },
        { value: "TB", label: "TB" },
        { value: "CCF", label: "CCF" },
        { value: "Neurological disease", label: "Neurological disease" },
        { value: "Infections", label: "Infections" },
        { value: "Malignancie", label: "Malignancie" },
        { value: "Primary loss of response", label: "Primary loss of response" },
        { value: "Secondary loss of response", label: "Secondary loss of response" },
    ];
    const adverseTofacitDrop = [
        { value: "", label: "Select" },
        { value: "Zoster", label: "Zoster" },
        { value: "Cardiovascular Events", label: "Cardiovascular Events" },
        { value: "Dyslipidemia", label: "Dyslipidemia" },
        { value: "Others", label: "Others" },
    ];
    const adverseAzaDrop = [
        { value: "", label: "Select" },
        { value: "Leucopenia", label: "Leucopenia" },
        { value: "Hepatotoxicity  ", label: "Hepatotoxicity  " },
        { value: "Pancreatitis", label: "Pancreatitis" },
        { value: "Alopecia", label: "Alopecia" },
        { value: "Headache", label: "Headache" },
        { value: "Lymphoma", label: "Lymphoma" },
        { value: "Skin Cancer", label: "Skin Cancer" },
        { value: "GI – Intolerance", label: "GI – Intolerance" },
        { value: "Others", label: "Others" },
    ];

    const optionDrop = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ]

    const diseaseBehaviourDrop = [
        { value: "select", label: "select" },
        { value: "Steroid dependent", label: "Steroid dependent" },
        { value: "Steroid refractory", label: "Steroid refractory" },
    ]

    const asaDrop = [
        { value: "Select", label: "Select" },
        { value: "Paradoxical Diarrhea", label: "Paradoxical Diarrhea" },
        { value: "AKI", label: "AKI" },
        { value: "Pneumonitis", label: "Pneumonitis" },
        { value: "Pancreatitis", label: "Pancreatitis" },
        { value: "Male Infertility", label: "Male Infertility" },
        { value: "Others", label: "Others" },
    ]

    const azaMpDrop = [
        { value: "select", label: "select" },
        { value: "Leucopenia", label: "Leucopenia" },
        { value: "Hepatotoxicity", label: "Hepatotoxicity" },
        { value: "Pancreatitis", label: "Pancreatitis" },
        { value: "Alopecia", label: "Alopecia" },
        { value: "Headache", label: "Headache" },
        { value: "Lymphoma", label: "Lymphoma" },
        { value: "Skin Cancer", label: "Skin Cancer" },
        { value: "GI – Intolerance", label: "GI – Intolerance" },
        { value: "Others", label: "Others" },
    ]

    const InfliximabDrop = [
        { value: "select", label: "select" },
        { value: "Infusion reaction", label: "Infusion reaction" },
        { value: "TB", label: "TB" },
        { value: "CCF", label: "CCF" },
        { value: "Neurological disease", label: "Neurological disease" },
        { value: "Infections", label: "Infections" },
        { value: "Malignancies ", label: "Malignancies " },
        { value: "Primary loss of response", label: "Primary loss of response" },
        { value: "Secondary loss of response", label: "Secondary loss of response" },
    ]

    const steroidsDrop = [
        { value: "select", label: "select" },
        { value: "Weight gain", label: "Weight gain" },
        { value: "Osteoporosis", label: "Osteoporosis" },
        { value: "Hypokalemia", label: "Hypokalemia" },
        { value: "Oral Candidiasis", label: "Oral Candidiasis" },
        { value: "Other infection", label: "Other infection" },
        { value: "High blood sugar", label: "High blood sugar" },
        { value: "Hirsutism ", label: "Hirsutism " },
        { value: "Depression", label: "Depression" },
        { value: "Fatigue", label: "Fatigue" },
        { value: "Striae", label: "Striae" },
        { value: "Others", label: "Others" },
    ]

    //   const tofacitinibDrop = [
    //     { value:"select", label:"select" },
    //     { value:"Zoster", label:"Zoster" },
    //     { value:"Cardiovascular Events", label:"Cardiovascular Events" },
    //     { value:"Dyslipidemia", label:"Dyslipidemia" },
    //     { value:"Others", label:"Others" },
    //   ]

    return (
        <div className="content_wrapper">
            <div className="contentwraper_header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-5">
                            {(followupObj?._id) ?
                                <h5 className="mb-0 text-center text-white">
                                    Update Followup (ULCERATIVE COLITIES DISEASE)
                                </h5> :
                                <h5 className="mb-0 text-center text-white">
                                    Add Followup (ULCERATIVE COLITIES DISEASE)
                                </h5>}
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className="btnlist">
                                <Link className="btn btn-defalut btn-md">
                                    <AiOutlineUnorderedList className="icon" />{" "}
                                    <span><Link to="/FollowUp/followupList" style={{ textDecoration: "none" }}>View List</Link></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper_contentbody">
                <div className='container-fluid'>
                    <div className='row justify-content-center addlist-frm mt-3'>
                        <div className='col-lg-10'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Patient ID* </label>
                                        <select className='form-control' value={patientId} onChange={(e) => { handlePatient(e.target.value) }}>
                                            <option value={"patient"}>Please Select Patient</option>
                                            {patientArr && patientArr.map((el) => <option value={el._id}>{el.ccfId} &nbsp; {el.patientName}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Date of Followup </label>
                                        <input type="Date" className='form-control' value={followupDate} onChange={(e) => { setFollowupDate(e.target.value) }} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Partial Mayo Score </label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Disease Extent </label>
                                        <input type="text" className='form-control' value={diseaseExtend} onChange={(el) => { setDiseaseExtend(el.target.value) }} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Total Mayo Score</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>UCEIS</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Endo Mayo</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>SCCAI</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Nancy Index</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Height</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>RHI</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Weight</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Geboe’s Score</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>BMI</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Handgrip strength</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>MIRT</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>MUST</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Reason for Replace</label>
                                        <select className='form-control'>
                                            {replaceDrop && replaceDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Height</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Weight</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>BMI</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Mid arm circumference</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Hand grip strength</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>TSF</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>MIRT</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>MUST</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Body Fat</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Body Fat</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Visceral Fat</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Resting Metabolism</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Subcutaneous fat (whole body)</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Subcutaneous fat (trunk)</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Subcutaneous fat (arms)</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Subcutaneous fat (legs)</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Skeletal muscle (whole body)</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Skeletal muscle (trunk)</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Skeletal muscle (arms)</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Skeletal muscle (legs)</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>SM Area</label>
                                        <input type="text" className='form-control' />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 heaind text-center">
                                    <h3>Investigations</h3>
                                </div>
                            </div>
                            <div className='row justify-content-center addlist-frm mt-3'>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>HB</label>
                                                <input type="text" className='form-control' value={hb} onChange={(e) => { setHb(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>HBsAg</label>
                                                <input type="text" className='form-control' value={hbsAg} onChange={(e) => { setHbsAg(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>PCV</label>
                                                <input type="text" className='form-control' value={pcv} onChange={(e) => { setPcv(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>MCV</label>
                                                <input type="text" className='form-control' value={mcv} onChange={(e) => { setMcv(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Anti HCV</label>
                                                <input type="text" className='form-control' value={antiHcv} onChange={(e) => { setAntiHcv(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>TLC</label>
                                                <input type="text" className='form-control' value={tlc} onChange={(el) => { setTlc(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>HIV</label>
                                                <input type="text" className='form-control' value={hiv} onChange={(e) => { setHiv(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>EBV-VCA IgM</label>
                                                <input type="text" className='form-control' value={ebvVcaLgm} onChange={(e) => { setEbvVcaLgm(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>PLT</label>
                                                <input type="text" className='form-control' value={plt} onChange={(e) => { setPlt(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>EBV-VCA IgG</label>
                                                <input type="text" className='form-control' value={ebvVcaLgg} onChange={(e) => { setEbvVcaLgg(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>ESR</label>
                                                <input type="text" className='form-control' value={esr} onChange={(e) => { setEsr(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>EBV-EBNA IgG</label>
                                                <input type="text" className='form-control' value={ebvEbnaLgg} onChange={(e) => { setEbvEbnaLgg(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>CRP Quantitative</label>
                                                <input type="text" className='form-control' value={crpQuantitative} onChange={(e) => { setCrpQuantitative(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>CMV – IgM</label>
                                                <input type="text" className='form-control' value={cmvLgm} onChange={(e) => { setCmvLgm(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>AST</label>
                                                <input type="text" className='form-control' value={ast} onChange={(e) => { setAst(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>CMV – IgG</label>
                                                <input type="text" className='form-control' value={cmvLgg} onChange={(e) => { setCmvLgg(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>ALT</label>
                                                <input type="text" className='form-control' value={alt} onChange={(e) => { setAlt(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Fecal Calprotectin</label>
                                                <input type="text" className='form-control' value={fecalCalprotectin} onChange={(e) => { setFecalCalprotectin(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>PCT</label>
                                                <input type="text" className='form-control' value={pct} onChange={(el) => { setPct(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>GGT</label>
                                                <input type="text" className='form-control' value={ggt} onChange={(el) => { setGgt(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>CPK</label>
                                                <input type="text" className='form-control' value={cpk} onChange={(el) => { setCpk(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Total proteins</label>
                                                <input type="text" className='form-control' value={totalProtien} onChange={(el) => { setTotalProtien(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Sodium</label>
                                                <input type="text" className='form-control' value={sodium} onChange={(el) => { setSodium(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Cholesterol</label>
                                                <input type="text" className='form-control' value={cholesterol} onChange={(el) => { setCholesterol(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Potassium</label>
                                                <input type="text" className='form-control' value={pottasium} onChange={(el) => { setPottasium(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>VLDL</label>
                                                <input type="text" className='form-control' value={vldl} onChange={(el) => { setVldl(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>CMV IHC</label>
                                                <input type="text" className='form-control' value={cmvIhc} onChange={(el) => { setCmvIhc(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>LDL</label>
                                                <input type="text" className='form-control' value={ldl} onChange={(el) => { setLdl(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>EBER ISH</label>
                                                <input type="text" className='form-control' value={eberIsh} onChange={(el) => { setEberIsh(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>HDL</label>
                                                <input type="text" className='form-control' value={hdl} onChange={(el) => { setHdl(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>IGRA</label>
                                                <input type="text" className='form-control' value={igra} onChange={(el) => { setIgra(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Triglycerides</label>
                                                <input type="text" className='form-control' value={triglycerides} onChange={(el) => { setTriglycerides(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>ALP</label>
                                                <input type="text" className='form-control' value={alp} onChange={(el) => { setAlp(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Stool Routine</label>
                                                <input type="text" className='form-control' value={stoolRoutine} onChange={(el) => { setStoolRoutine(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Albumin</label>
                                                <input type="text" className='form-control' value={albumin} onChange={(el) => { setAlbumin(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Stool Culture</label>
                                                <input type="text" className='form-control' value={stoolCulture} onChange={(el) => { setStoolCulture(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Iron</label>
                                                <input type="text" className='form-control' value={iron} onChange={(el) => { setIron(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Stool GDH</label>
                                                <input type="text" className='form-control' value={stoolGdh} onChange={(el) => { setStoolGdh(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>TIBC</label>
                                                <input type="text" className='form-control' value={tibc} onChange={(el) => { setTibc(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Stool C-diff Toxin A</label>
                                                <input type="text" className='form-control' value={stoolcDiffToxin} onChange={(el) => { setStoolcDiffToxin(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Ferritin</label>
                                                <input type="text" className='form-control' value={ferritin} onChange={(el) => { setFerritin(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Stool C-diff PCR</label>
                                                <input type="text" className='form-control' value={stoolcDiffPcr} onChange={(el) => { setStoolcDiffPcr(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Calcium</label>
                                                <input type="text" className='form-control' value={calcium} onChange={(el) => { setCalcium(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Stool Biofilm</label>
                                                <input type="text" className='form-control' value={stoolBiofilm} onChange={(el) => { setStoolBiofilm(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Magnesium</label>
                                                <input type="text" className='form-control' value={magnesium} onChange={(el) => { setMagnesium(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>TPMT</label>
                                                <input type="text" className='form-control' value={tpmt} onChange={(el) => { setTpmt(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Vitamin-D</label>
                                                <input type="text" className='form-control' value={vitamind} onChange={(el) => { setVitamind(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>NDUT – 15 </label>
                                                <input type="text" className='form-control' value={ndut} onChange={(el) => { setNdut(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>RBS</label>
                                                <input type="text" className='form-control' value={rbs} onChange={(el) => { setRbs(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>6 – TGN</label>
                                                <input type="text" className='form-control' value={tgn} onChange={(el) => { setTgn(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>ASCA IgAt</label>
                                                <input type="text" className='form-control' value={ascaLgat} onChange={(el) => { setAscaLgat(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>6 – MMPR</label>
                                                <input type="text" className='form-control' value={mmpr} onChange={(el) => { setMmpr(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>ASCA IgG</label>
                                                <input type="text" className='form-control' value={ascaLgg} onChange={(el) => { setAscaLgg(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Vitamin B12</label>
                                                <input type="text" className='form-control' value={vitaminB12} onChange={(el) => { setVitaminB12(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>P-ANCA</label>
                                                <input type="text" className='form-control' value={pAnca} onChange={(el) => { setPAnca(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Folate</label>
                                                <input type="text" className='form-control' value={folate} onChange={(el) => { setFolate(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Urea</label>
                                                <input type="text" className='form-control' value={urea} onChange={(el) => { setUrea(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>VZV Antibody</label>
                                                <input type="text" className='form-control' value={vzvAntibody} onChange={(el) => { setVzvAntibody(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Creatinine</label>
                                                <input type="text" className='form-control' value={creatinine} onChange={(el) => { setCreatinine(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Chest X Ray</label>
                                                <input type="text" className='form-control' value={chestXray} onChange={(el) => { setChestXray(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>X Ray abdomen</label>
                                                <input type="text" className='form-control' value={xrayAbdomen} onChange={(el) => { setXrayAbdomen(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Mantoux</label>
                                                <input type="text" className='form-control' value={mantoux} onChange={(el) => { setMantoux(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Microbiota</label>
                                                <input type="text" className='form-control' value={microbiota} onChange={(el) => { setMicrobiota(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>CT Abdomen</label>
                                                <input type="text" className='form-control' value={ctAbdomen} onChange={(el) => { setCtAbdomen(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>CT Chest</label>
                                                <input type="text" className='form-control' value={ctChest} onChange={(el) => { setCtChest(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>MRI Abdomen</label>
                                                <input type="text" className='form-control' value={mriAbdomen} onChange={(el) => { setMriAbdomen(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Others</label>
                                                <input type="text" className='form-control' value={others} onChange={(el) => { setOthers(el.target.value) }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12 heaind text-center">
                                    <h3>Treatment</h3>
                                </div>
                            </div>
                            <div className='row justify-content-center addlist-frm mt-3'>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Oral 5-ASA </label>
                                                <select className='form-control' value={oralAsa} onChange={(e) => { setOralAsa(e.target.value) }}>
                                                    {oralAsaDrop && oralAsaDrop.map((ek) => <option value={ek.value}>{ek.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Rectal 5ASA</label>
                                                <select className='form-control' value={rectalAsa} onChange={(e) => { setRectalAsa(e.target.value) }}>
                                                    {rectalAsaDrop && rectalAsaDrop.map((ek) => <option value={ek.value}>{ek.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>AZA</label>
                                                <select className='form-control' value={aza} onChange={(e) => { setAza(e.target.value) }}>
                                                    {azaDrop && azaDrop.map((ek) => <option value={ek.value}>{ek.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>6-MP</label>
                                                <select className='form-control' value={mp} onChange={(e) => { setMp(e.target.value) }}>
                                                    {mpDrop && mpDrop.map((ek) => <option value={ek.value}>{ek.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Prednisolone</label>
                                                <select className='form-control' value={prednisolone} onChange={(e) => { setPrednisolone(e.target.value) }}>
                                                    {predenisoloniDrop && predenisoloniDrop.map((ek) => <option value={ek.value}>{ek.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Infliximab</label>
                                                <select className='form-control' value={infliximab} onChange={(e) => { setInfliximab(e.target.value) }}>
                                                    {infliximabDrop && infliximabDrop.map((ek) => <option value={ek.value}>{ek.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Budesonide</label>
                                                <select className='form-control' value={budesonide} onChange={(e) => { setBudesonide(e.target.value) }}>
                                                    {budesonideDrop && budesonideDrop.map((ek) => <option value={ek.value}>{ek.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Rectal Steroids</label>
                                                <select className='form-control' value={rectalSteroids} onChange={(e) => { setRectalSteroids(e.target.value) }}>
                                                    {options && options.map((el) => <option value={el.value}>{el.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Adalimunab</label>
                                                <select className='form-control'>
                                                    <option>Hello</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Vedolizumab</label>
                                                <input type="text" className='form-control' value={vedolizumab} onChange={(e) => { setVedolizumab(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Cyclosporine</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Ustekinumab</label>
                                                <input type="text" className='form-control' value={ustekinumab} onChange={(e) => { setUstekinumab(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Tofacitinib</label>
                                                <select className='form-control' >
                                                    <option></option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Tacrolimus</label>
                                                <input type="text" className='form-control' value={tacrolimus} onChange={(e) => { setTacrolimus(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Probiotics</label>
                                                <input type="text" className='form-control' value={probiotics} onChange={(e) => { setProbiotics(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Filgotinib</label>
                                                <input type="text" className='form-control' value={filgotinib} onChange={(e) => { setFilgotinib(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>FMT Capsule</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>FMT</label>
                                                <input type="text" className='form-control' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='from-group'>
                                                <label>Surgery</label>
                                                <select className='form-control' value={surgery} onChange={(e) => { setSurgery(e.target.value) }}>
                                                    {options && options.map((ek) => <option value={ek.value}>{ek.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='from-group'>
                                                <label>If Yes</label>
                                                <input type="text" className='form-control' placeholder='Type of Sergery' value={specify} onChange={(e) => { setSpecify(e.target.value) }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 heaind text-center">
                                    <h3>Adverse Events to Drugs</h3>
                                </div>
                            </div>
                            <div className='row justify-content-center addlist-frm mt-3'>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>5-ASA </label>
                                                <select className="form-control" >
                                                    <option>hello</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>AZA/6-MP</label>
                                                <select className="form-control">
                                                    <option>hello</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Infliximab/ Adalimumab</label>
                                                <select className="form-control" >
                                                    <option>hello</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Steroids </label>
                                                <select className="form-control" >
                                                    <option>hello</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Tofacitinib</label>
                                                <select className="form-control" >
                                                    <option>hello</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 heaind text-center pt-3">
                                                <h4>Complications and Outcome</h4>
                                            </div>
                                            <div className='row'>
                                                <div className="col-lg-12 heaind text-left">
                                                    <h3>Hospitalization</h3>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='from-group'>
                                                        <label>Date of hospitalization </label>
                                                        <input type="date" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='from-group'>
                                                        <label>Reason of Hospitalization</label>
                                                        <input type="text" placeholder='reason of hospitalization' className='form-control' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-lg-12 heaind text-left">
                                                    <h3>Complications</h3>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Megacolon</label>
                                                        <select className='form-control'>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Massive haemorrhage</label>
                                                        <select className='form-control'>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Colorectal Cancer</label>
                                                        <select className='form-control'>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Perforation</label>
                                                        <select className='form-control'>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Toxic Megacolon</label>
                                                        <select className='form-control'>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Others</label>
                                                        <input type="text" className='form-control' placeholder='Please Specify' />
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Disease behavior</label>
                                                        <select className='form-control'>
                                                            {diseaseBehaviourDrop && diseaseBehaviourDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Death</label>
                                                        <select className='form-control'>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Date Of Death</label>
                                                        <input type="date" className='form-control' />
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Cause Of Death</label>
                                                        <input type="text" className='form-control' placeholder='Cause of death' />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='subbtn text-center mt-4 mb-5'>
                                        {(followupObj?._id) ?
                                            <button to="" className='btn btn-link' onClick={handleAddFollowUp}>Update</button>
                                            :
                                            <button to="" className='btn btn-link' onClick={handleAddFollowUp}>Add Follow Up</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

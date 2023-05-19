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
    const [namePatient, setNamePatient] = useState("");
    const [patientName, setPatientName] = useState("");
    const [ccfIdName, setCcfIdName] = useState("");

    const [followUpDate, setFollowUpDate] = useState("");
    const [partialMayoScore, setPartialMayoScore] = useState("");
    const [diseaseExtend, setDiseaseExtend] = useState("");
    const [totalMayoScore, setTotalMayoScore] = useState("");
    const [uceis, setUceis] = useState("");
    const [endoMayo, setEndoMayo] = useState("");
    const [sccai, setSccai] = useState("");
    const [nancyIndex, setNancyIndex] = useState("");
    const [height, setHeight] = useState("");
    const [rhi, setRhi] = useState("");
    const [weight, setWeight] = useState("");
    const [geboeScore, setGeboeScore] = useState("");
    const [bmi, setBmi] = useState("");
    const [handgripStrength, setHandgripStrength] = useState("");
    const [mirt, setMirt] = useState("");
    const [must, setMust] = useState("");
    const [reasonForReplace, setReasonForReplace] = useState("");
    const [height_2, setHeight_2] = useState("");
    const [weight_2, setWeight_2] = useState("");
    const [bmi_2, setBmi_2] = useState("");
    const [midarmCircumference, setMidarmCircumference] = useState("");
    const [handgripStrength_2, setHandgripStrength_2] = useState("");
    const [tsf, setTsf] = useState("");
    const [mirt_2, setMirt_2] = useState("");
    const [must_2, setMust_2] = useState("");
    const [bodyFat, setBodyFat] = useState("");
    const [visceralFat, setVisceralFat] = useState("");
    const [resstingMetabolism, setResstingMetabolism] = useState("");
    const [subcutaneousWholeBody, setSubcutaneousWholeBody] = useState("");
    const [subcutaneousWholeTrunk, setSubcutaneousWholeTrunk] = useState("");
    const [subcutaneousWholeArm, setSubcutaneousWholeArm] = useState("");
    const [subcutaneousWholeLeg, setSubcutaneousWholeLeg] = useState("");
    const [skeletalWholeBody, setSkeletalWholeBody] = useState("");
    const [skeletalWholeTrunk, setSkeletalWholeTrunk] = useState("");
    const [skeletalWholeArm, setSkeletalWholeArm] = useState("");
    const [skeletalWholeLeg, setSkeletalWholeLeg] = useState("");
    const [smArea, setSmArea] = useState("");
    const [hb, setHb] = useState("");
    const [hbsag, setHbsag] = useState("");
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
    const [fecalCalprotactin, setFecalCalprotactin] = useState("");
    const [pct, setPct] = useState("");
    const [ggt, setGgt] = useState("");
    const [cpk, setCpk] = useState("");
    const [totalProtien, setTotalProtien] = useState("");
    const [sodium, setSodium] = useState("");
    const [cholestrol, setCholestrol] = useState("");
    const [potassium, setPotassium] = useState("");
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
    const [stoolCdiffToxinA, setStoolCdiffToxinA] = useState("");
    const [ferritin, setFerritin] = useState("");
    const [stoolCdiffPcr, setStoolCdiffPcr] = useState("");
    const [calcium, setCalcium] = useState("");
    const [stoolBiofilm, setStoolBiofilm] = useState("");
    const [magnesium, setMagnesium] = useState("");
    const [tpmt, setTpmt] = useState("");
    const [vitamind, setVitamind] = useState("");
    const [ndut_15, setNdut_15] = useState("");
    const [rbs, setRbs] = useState("");
    const [tgn_6, setTgn_6] = useState("");
    const [ascaLgat, setAscaLgat] = useState("");
    const [mmpr_6, setMmpr_6] = useState("");
    const [ascaLgg, setAscaLgg] = useState("");
    const [vitaminb_12, setVitaminb_12] = useState("");
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
    const [oral_5asa, setOral_5asa] = useState("");
    const [rectal5Asa, setRectal5Asa] = useState("");
    const [aza, setAza] = useState("");
    const [mp_6, setMp_6] = useState("");
    const [prednisolone, setPrednisolone] = useState("");
    const [infliximab, setInfliximab] = useState("");
    const [budesonide, setBudesonide] = useState("");
    const [rectalSteroids, setRectalSteroids] = useState("");
    const [adalimunab, setAdalimunab] = useState("");
    const [vedolizumab, setVedolizumab] = useState("");
    const [cyclosporine, setCyclosporine] = useState("");
    const [ustekinumab, setUstekinumab] = useState("");
    const [tofacitinib, setTofacitinib] = useState("");
    const [tacrolimus, setTacrolimus] = useState("");
    const [probiotics, setProbiotics] = useState("");
    const [filgotinib, setFilgotinib] = useState("");
    const [fmtCapsule, setFmtCapsule] = useState("");
    const [fmt, setFmt] = useState("");
    const [surgery, setSurgery] = useState("");
    const [surgeryYes, setSurgeryYes] = useState("");
    const [adverseAsa, setAdverseAsa] = useState("");
    const [adverseAza, setAdverseAza] = useState("");
    const [adverseInfliximab, setAdverseInfliximab] = useState("");
    const [adverseSteroid, setAdverseSteroid] = useState("");
    const [adverseTofacitinib, setAdverseTofacitinib] = useState("");
    const [hospitalization, setHospitalization] = useState("");
    const [reasonHospitalization, setReasonHospitalization] = useState("");
    const [megacolon, setMegacolon] = useState("");
    const [massiveHaemorrhage, setMassiveHaemorrhage] = useState("");
    const [colorectalCancer, setColorectalCancer] = useState("");
    const [perforation, setPerforation] = useState("");
    const [toxicMegacolon, setToxicMegacolon] = useState("");
    const [adverseOthers, setAdverseOthers] = useState("");
    const [diseaseBehavior, setDiseaseBehavior] = useState("");
    const [death, setDeath] = useState("");
    const [dateOfDeath, setDateOfDeath] = useState("");
    const [causeOfDeath, setCauseOfDeath] = useState("");

    const dispatch = useDispatch();
    const followupObj = useSelector((states) => states.followup.followupObj);
    const patientArr = useSelector((states) => states.demografic.demografics);

    const handleAddFollowUp = () => {
        if(patientId == '' || patientId == undefined){
            toast.error("Please select patient");
        }else{
            let obj = {
                patientId,
                namePatient,
                followUpDate,
                partialMayoScore,
                diseaseExtend,
                totalMayoScore,
                uceis,
                endoMayo,
                sccai,
                nancyIndex,
                height,
                rhi,
                weight,
                geboeScore,
                bmi,
                handgripStrength,
                mirt,
                must,
                reasonForReplace,
                height_2,
                weight_2,
                bmi_2,
                midarmCircumference,
                handgripStrength_2,
                tsf,
                mirt_2,
                must_2,
                bodyFat,
                visceralFat,
                resstingMetabolism,
                subcutaneousWholeBody,
                subcutaneousWholeTrunk,
                subcutaneousWholeArm,
                subcutaneousWholeLeg,
                skeletalWholeBody,
                skeletalWholeTrunk,
                skeletalWholeArm,
                skeletalWholeLeg,
                smArea,
                hb,
                hbsag,
                pcv,
                mcv,
                antiHcv,
                tlc,
                hiv,
                ebvVcaLgm,
                plt,
                ebvVcaLgg,
                esr,
                ebvEbnaLgg,
                crpQuantitative,
                cmvLgm,
                ast,
                cmvLgg,
                alt,
                fecalCalprotactin,
                pct,
                ggt,
                cpk,
                totalProtien,
                sodium,
                cholestrol,
                potassium,
                vldl,
                cmvIhc,
                ldl,
                eberIsh,
                hdl,
                igra,
                triglycerides,
                alp,
                stoolRoutine,
                albumin,
                stoolCulture,
                iron,
                stoolGdh,
                tibc,
                stoolCdiffToxinA,
                ferritin,
                stoolCdiffPcr,
                calcium,
                stoolBiofilm,
                magnesium,
                tpmt,
                vitamind,
                ndut_15,
                rbs,
                tgn_6,
                ascaLgat,
                mmpr_6,
                ascaLgg,
                vitaminb_12,
                pAnca,
                folate,
                urea,
                vzvAntibody,
                creatinine,
                chestXray,
                xrayAbdomen,
                mantoux,
                microbiota,
                ctAbdomen,
                ctChest,
                mriAbdomen,
                others,
                oral_5asa,
                rectal5Asa,
                aza,
                mp_6,
                prednisolone,
                infliximab,
                budesonide,
                rectalSteroids,
                adalimunab,
                vedolizumab,
                cyclosporine,
                ustekinumab,
                tofacitinib,
                tacrolimus,
                probiotics,
                filgotinib,
                fmtCapsule,
                fmt,
                surgery,
                surgeryYes,
                adverseAsa,
                adverseAza,
                adverseInfliximab,
                adverseSteroid,
                adverseTofacitinib,
                hospitalization,
                reasonHospitalization,
                megacolon,
                massiveHaemorrhage,
                colorectalCancer,
                perforation,
                toxicMegacolon,
                adverseOthers,
                diseaseBehavior,
                death,
                dateOfDeath,
                causeOfDeath,
            };
    
        if (followupObj?._id) {
            dispatch(FOLLOWUPUpdate(followupObj._id, obj));
            toast.success("Follow up updated")
        } else {
            dispatch(FOLLOWUPAdd(obj));
            dispatch(SETFOLLOWUPObj(null))
            toast.success("Follow up Added")
        }
    }
    };

    useEffect(() => {
        if (followupObj) {
            setPatientId(followupObj?.patientId);
            setFollowUpDate(followupObj?.followUpDate);
            setPartialMayoScore(followupObj?.partialMayoScore);
            setDiseaseExtend(followupObj?.diseaseExtend);
            setTotalMayoScore(followupObj?.totalMayoScore);
            setUceis(followupObj?.uceis);
            setEndoMayo(followupObj?.endoMayo);
            setSccai(followupObj?.sccai);
            setNancyIndex(followupObj?.nancyIndex);
            setHeight(followupObj?.height);
            setRhi(followupObj?.rhi);
            setWeight(followupObj?.weight);
            setGeboeScore(followupObj?.geboeScore);
            setBmi(followupObj?.bmi);
            setHandgripStrength(followupObj?.handgripStrength);
            setMirt(followupObj?.mirt);
            setMust(followupObj?.must);
            setReasonForReplace(followupObj?.reasonForReplace);
            setHeight_2(followupObj?.height_2);
            setWeight_2(followupObj?.weight_2);
            setBmi_2(followupObj?.bmi_2);
            setMidarmCircumference(followupObj?.midarmCircumference);
            setHandgripStrength_2(followupObj?.handgripStrength_2);
            setTsf(followupObj?.tsf);
            setMirt_2(followupObj?.mirt_2);
            setMust_2(followupObj?.must_2);
            setBodyFat(followupObj?.bodyFat);
            setVisceralFat(followupObj?.visceralFat);
            setResstingMetabolism(followupObj?.resstingMetabolism);
            setSubcutaneousWholeBody(followupObj?.subcutaneousWholeBody);
            setSubcutaneousWholeTrunk(followupObj?.subcutaneousWholeTrunk);
            setSubcutaneousWholeArm(followupObj?.subcutaneousWholeArm);
            setSubcutaneousWholeLeg(followupObj?.subcutaneousWholeLeg);
            setSkeletalWholeBody(followupObj?.skeletalWholeBody);
            setSkeletalWholeTrunk(followupObj?.skeletalWholeTrunk);
            setSkeletalWholeArm(followupObj?.skeletalWholeArm);
            setSkeletalWholeLeg(followupObj?.skeletalWholeLeg);
            setSmArea(followupObj?.smArea);
            setHb(followupObj?.hb);
            setHbsag(followupObj?.hbsag);
            setPcv(followupObj?.pcv);
            setMcv(followupObj?.mcv);
            setAntiHcv(followupObj?.antiHcv);
            setTlc(followupObj?.tlc);
            setHiv(followupObj?.hiv);
            setEbvVcaLgm(followupObj?.ebvVcaLgm);
            setPlt(followupObj?.plt);
            setEbvVcaLgg(followupObj?.ebvVcaLgg);
            setEsr(followupObj?.esr);
            setEbvEbnaLgg(followupObj?.ebvEbnaLgg);
            setCrpQuantitative(followupObj?.crpQuantitative);
            setCmvLgm(followupObj?.cmvLgm);
            setAst(followupObj?.ast);
            setCmvLgg(followupObj?.cmvLgg);
            setAlt(followupObj?.alt);
            setFecalCalprotactin(followupObj?.fecalCalprotactin);
            setPct(followupObj?.pct);
            setGgt(followupObj?.ggt);
            setCpk(followupObj?.cpk);
            setTotalProtien(followupObj?.totalProtien);
            setSodium(followupObj?.sodium);
            setCholestrol(followupObj?.cholestrol);
            setPotassium(followupObj?.potassium);
            setVldl(followupObj?.vldl);
            setCmvIhc(followupObj?.cmvIhc);
            setLdl(followupObj?.ldl);
            setEberIsh(followupObj?.eberIsh);
            setHdl(followupObj?.hdl);
            setIgra(followupObj?.igra);
            setTriglycerides(followupObj?.triglycerides);
            setAlp(followupObj?.alp);
            setStoolRoutine(followupObj?.stoolRoutine);
            setAlbumin(followupObj?.albumin);
            setStoolCulture(followupObj?.stoolCulture);
            setIron(followupObj?.iron);
            setStoolGdh(followupObj?.stoolGdh);
            setTibc(followupObj?.tibc);
            setStoolCdiffToxinA(followupObj?.stoolCdiffToxinA);
            setFerritin(followupObj?.ferritin);
            setStoolCdiffPcr(followupObj?.stoolCdiffPcr);
            setCalcium(followupObj?.calcium);
            setStoolBiofilm(followupObj?.stoolBiofilm);
            setMagnesium(followupObj?.magnesium);
            setTpmt(followupObj?.tpmt);
            setVitamind(followupObj?.vitamind);
            setNdut_15(followupObj?.ndut_15);
            setRbs(followupObj?.rbs);
            setTgn_6(followupObj?.tgn_6);
            setAscaLgat(followupObj?.ascaLgat);
            setMmpr_6(followupObj?.mmpr_6);
            setAscaLgg(followupObj?.ascaLgg);
            setVitaminb_12(followupObj?.vitaminb_12);
            setPAnca(followupObj?.pAnca);
            setFolate(followupObj?.folate);
            setUrea(followupObj?.urea);
            setVzvAntibody(followupObj?.vzvAntibody);
            setCreatinine(followupObj?.creatinine);
            setChestXray(followupObj?.chestXray);
            setXrayAbdomen(followupObj?.xrayAbdomen);
            setMantoux(followupObj?.mantoux);
            setMicrobiota(followupObj?.microbiota);
            setCtAbdomen(followupObj?.ctAbdomen);
            setCtChest(followupObj?.ctChest);
            setMriAbdomen(followupObj?.mriAbdomen);
            setOthers(followupObj?.others);
            setOral_5asa(followupObj?.oral_5asa);
            setRectal5Asa(followupObj?.rectal5Asa);
            setAza(followupObj?.aza);
            setMp_6(followupObj?.mp_6);
            setPrednisolone(followupObj?.prednisolone);
            setInfliximab(followupObj?.infliximab);
            setBudesonide(followupObj?.budesonide);
            setRectalSteroids(followupObj?.rectalSteroids);
            setAdalimunab(followupObj?.adalimunab);
            setVedolizumab(followupObj?.vedolizumab);
            setCyclosporine(followupObj?.cyclosporine);
            setUstekinumab(followupObj?.ustekinumab);
            setTofacitinib(followupObj?.tofacitinib);
            setTacrolimus(followupObj?.tacrolimus);
            setProbiotics(followupObj?.probiotics);
            setFilgotinib(followupObj?.filgotinib);
            setFmtCapsule(followupObj?.fmtCapsule);
            setFmt(followupObj?.fmt);
            setSurgery(followupObj?.surgery);
            setSurgeryYes(followupObj?.surgeryYes);
            setAdverseAsa(followupObj?.adverseAsa);
            setAdverseAza(followupObj?.adverseAza);
            setAdverseInfliximab(followupObj?.adverseInfliximab);
            setAdverseSteroid(followupObj?.adverseSteroid);
            setAdverseTofacitinib(followupObj?.adverseTofacitinib);
            setHospitalization(followupObj?.hospitalization);
            setReasonHospitalization(followupObj?.reasonHospitalization);
            setMegacolon(followupObj?.megacolon);
            setMassiveHaemorrhage(followupObj?.massiveHaemorrhage);
            setColorectalCancer(followupObj?.colorectalCancer);
            setPerforation(followupObj?.perforation);
            setToxicMegacolon(followupObj?.toxicMegacolon);
            setAdverseOthers(followupObj?.adverseOthers);
            setDiseaseBehavior(followupObj?.diseaseBehavior);
            setDeath(followupObj?.death);
            setDateOfDeath(followupObj?.dateOfDeath);
            setCauseOfDeath(followupObj?.causeOfDeath);
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
            setNamePatient(namePatient);
            setCcfIdName(ccfId);
        }
    }

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
    
    const options = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];
    const optionDrop = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];
    const diseaseBehaviourDrop = [
        { value: "select", label: "select" },
        { value: "Steroid dependent", label: "Steroid dependent" },
        { value: "Steroid refractory", label: "Steroid refractory" },
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
                                            <option selected >Please Select Patient</option>
                                            {patientArr && patientArr.map((el) => <option value={el._id}>{el.ccfId} &nbsp; {el.patientName}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Date of Followup </label>
                                        <input type="Date" className='form-control' value={followUpDate} onChange={(e) => { setFollowUpDate(e.target.value) }} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Partial Mayo Score </label>
                                        <input type="text" className='form-control' value={partialMayoScore} onChange={(el)=>{setPartialMayoScore(el.target.value)}}/>
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
                                        <input type="text" className='form-control' value={totalMayoScore} onChange={(el)=>{setTotalMayoScore(el.target.value)}}/>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>UCEIS</label>
                                        <input type="text" className='form-control' value={uceis} onChange={(el)=>{setUceis(el.target.value)}}/>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Endo Mayo</label>
                                        <input type="text" className='form-control' value={endoMayo} onChange={(el)=>{setEndoMayo(el.target.value)}}/>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>SCCAI</label>
                                        <input type="text" className='form-control' value={sccai} onChange={(el)=>{setSccai(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Nancy Index</label>
                                        <input type="text" className='form-control' value={nancyIndex} onChange={(el)=>{setNancyIndex(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Height</label>
                                        <input type="text" className='form-control' value={height} onChange={(el)=>{setHeight(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>RHI</label>
                                        <input type="text" className='form-control' value={rhi} onChange={(el)=>{setRhi(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Weight</label>
                                        <input type="text" className='form-control' value={weight} onChange={(el)=>{setWeight(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Geboe’s Score</label>
                                        <input type="text" className='form-control' value={geboeScore} onChange={(el)=>{setGeboeScore(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>BMI</label>
                                        <input type="text" className='form-control' value={bmi} onChange={(el)=>{setBmi(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Handgrip strength</label>
                                        <input type="text" className='form-control' value={handgripStrength} onChange={(el)=>{setHandgripStrength(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>MIRT</label>
                                        <input type="text" className='form-control' value={mirt} onChange={(el)=>{setMirt(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>MUST</label>
                                        <input type="text" className='form-control' value={must} onChange={(el)=>{setMust(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Reason for Replace</label>
                                        <select className='form-control' value={reasonForReplace} onChange={(el)=>{setReasonForReplace(el.target.value)}}>
                                            {replaceDrop && replaceDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Height</label>
                                        <input type="text" className='form-control' value={height_2} onChange={(el)=>{setHeight_2(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Weight</label>
                                        <input type="text" className='form-control' value={weight_2} onChange={(el)=>{setWeight_2(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>BMI</label>
                                        <input type="text" className='form-control' value={bmi_2} onChange={(el)=>{setBmi_2(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Mid arm circumference</label>
                                        <input type="text" className='form-control' value={midarmCircumference} onChange={(el)=>{setMidarmCircumference(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Hand grip strength</label>
                                        <input type="text" className='form-control' value={handgripStrength_2} onChange={(el)=>{setHandgripStrength_2(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>TSF</label>
                                        <input type="text" className='form-control' value={tsf} onChange={(el)=>{setTsf(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>MIRT</label>
                                        <input type="text" className='form-control' value={mirt_2} onChange={(el)=>{setMirt_2(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>MUST</label>
                                        <input type="text" className='form-control' value={must_2} onChange={(el)=>{setMust_2(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Body Fat</label>
                                        <input type="text" className='form-control' value={bodyFat} onChange={(el)=>{setBodyFat(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Body Fat</label>
                                        <input type="text" className='form-control' value={uceis} onChange={(el)=>{setUceis(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Visceral Fat</label>
                                        <input type="text" className='form-control' value={visceralFat} onChange={(el)=>{setVisceralFat(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Resting Metabolism</label>
                                        <input type="text" className='form-control' value={resstingMetabolism} onChange={(el)=>{setResstingMetabolism(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Subcutaneous fat (whole body)</label>
                                        <input type="text" className='form-control' value={subcutaneousWholeBody} onChange={(el)=>{setSubcutaneousWholeBody(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Subcutaneous fat (trunk)</label>
                                        <input type="text" className='form-control' value={subcutaneousWholeTrunk} onChange={(el)=>{setSubcutaneousWholeTrunk(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Subcutaneous fat (arms)</label>
                                        <input type="text" className='form-control' value={subcutaneousWholeArm} onChange={(el)=>{setSubcutaneousWholeArm(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Subcutaneous fat (legs)</label>
                                        <input type="text" className='form-control' value={subcutaneousWholeLeg} onChange={(el)=>{setSubcutaneousWholeLeg(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Skeletal muscle (whole body)</label>
                                        <input type="text" className='form-control' value={skeletalWholeBody} onChange={(el)=>{setSkeletalWholeBody(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Skeletal muscle (trunk)</label>
                                        <input type="text" className='form-control' value={skeletalWholeTrunk} onChange={(el)=>{setSkeletalWholeTrunk(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Skeletal muscle (arms)</label>
                                        <input type="text" className='form-control' value={skeletalWholeArm} onChange={(el)=>{setSkeletalWholeArm(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>Skeletal muscle (legs)</label>
                                        <input type="text" className='form-control' value={skeletalWholeLeg} onChange={(el)=>{setSkeletalWholeLeg(el.target.value)}} />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>SM Area</label>
                                        <input type="text" className='form-control' value={smArea} onChange={(el)=>{setSmArea(el.target.value)}} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 heaind text-center pt-3">
                                    <h4>Investigations</h4>
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
                                                <input type="text" className='form-control' value={hbsag} onChange={(e) => { setHbsag(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>PCV</label>
                                                <input type="text" className='form-control' value={pcv} onChange={(e) => {setPcv(e.target.value) }} />
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
                                                <select className='form-control' value={hiv} onChange={(el)=>{setHiv(el.target.value)}}>
                                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>)}
                                                </select>
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
                                                <input type="text" className='form-control' value={fecalCalprotactin} onChange={(e) => { setFecalCalprotactin(e.target.value) }} />
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
                                                <input type="text" className='form-control' value={cholestrol} onChange={(el) => { setCholestrol(el.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Potassium</label>
                                                <input type="text" className='form-control' value={potassium} onChange={(el) => { setPotassium(el.target.value) }} />
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
                                                <input type="text" className='form-control' value={stoolCdiffToxinA} onChange={(el) => { setStoolCdiffToxinA(el.target.value) }} />
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
                                                <input type="text" className='form-control' value={stoolCdiffPcr} onChange={(el) => { setStoolCdiffPcr(el.target.value) }} />
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
                                                <label>NDUT - 15 </label>
                                                <input type="text" className='form-control' value={ndut_15} onChange={(el) => { setNdut_15(el.target.value) }} />
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
                                                <label>6 - TGN</label>
                                                <input type="text" className='form-control' value={tgn_6} onChange={(el) => { setTgn_6(el.target.value) }} />
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
                                                <input type="text" className='form-control' value={mmpr_6} onChange={(el) => { setMmpr_6(el.target.value) }} />
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
                                                <input type="text" className='form-control' value={vitaminb_12} onChange={(el) => { setVitaminb_12(el.target.value) }} />
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
                                <div className="col-lg-12 heaind text-center pt-3">
                                    <h4>Treatments</h4>
                                </div>
                            </div>
                            <div className='row justify-content-center addlist-frm mt-3'>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Oral 5-ASA </label>
                                                <select className='form-control' value={oral_5asa} onChange={(e) => { setOral_5asa(e.target.value) }}>
                                                    {oralAsaDrop && oralAsaDrop.map((ek) => <option value={ek.value}>{ek.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Rectal 5ASA</label>
                                                <select className='form-control' value={rectal5Asa} onChange={(e) => { setRectal5Asa(e.target.value) }}>
                                                    { rectalAsaDrop && rectalAsaDrop.map((ek) => <option value={ek.value}>{ek.label}</option>)}
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
                                                <select className='form-control' value={mp_6} onChange={(e) => { setMp_6(e.target.value) }}>
                                                    { mpDrop && mpDrop.map((ek) => <option value={ek.value}>{ek.label}</option>)}
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
                                                <select className='form-control' value={adalimunab} onChange={(el)=>{setAdalimunab(el.target.value)}}>
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
                                                <input type="text" className='form-control' value={cyclosporine} onChange={(el)=>{setCyclosporine(el.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Ustekinumab</label>
                                                <input type="text" className='form-control' value={ustekinumab} onChange={(e)=>{setUstekinumab(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Tofacitinib</label>
                                                <select className='form-control' value={tofacitinib} onChange={(el)=>{setTofacitinib(el.target.value)}}>
                                                    { tofacitinibDrop && tofacitinibDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Tacrolimus</label>
                                                <input type="text" className='form-control' value={tacrolimus} onChange={(e) => {setTacrolimus(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Probiotics</label>
                                                <input type="text" className='form-control' value={probiotics} onChange={(e) => {setProbiotics(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Filgotinib</label>
                                                <input type="text" className='form-control' value={filgotinib} onChange={(e) => {setFilgotinib(e.target.value) }} />
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>FMT Capsule</label>
                                                <input type="text" className='form-control' value={fmtCapsule} onChange={(el)=>{setFmtCapsule(el.target.value)}}/>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>FMT</label>
                                                <input type="text" className='form-control' value={fmt} onChange={(el)=>{setFmt(el.target.value)}} />
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
                                                <input type="text" className='form-control' placeholder='Type of Sergery' value={surgeryYes} onChange={(e) => { setSurgeryYes(e.target.value) }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 heaind text-center pt-3">
                                    <h4>Adverse Events to Drugs</h4>
                                </div>
                            </div>
                            <div className='row justify-content-center addlist-frm mt-3'>
                                <div className='col-lg-12'>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>5-ASA </label>
                                                <select className="form-control" value={adverseAsa} onChange={(el)=>{setAdverseAsa(el.target.value)}}>
                                                    {adverseAsaDrop && adverseAsaDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>AZA/6-MP</label>
                                                <select className="form-control" value={adverseAza} onChange={(el)=>{setAdverseAza(el.target.value)}}>
                                                    { adverseAzaDrop && adverseAzaDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Infliximab/ Adalimumab</label>
                                                <select className="form-control" value={adverseInfliximab} onChange={(el)=>{setAdverseInfliximab(el.target.value)}}>
                                                    { adverseInfliDrop && adverseInfliDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Steroids </label>
                                                <select className="form-control" value={adverseSteroid} onChange={(el)=>{setAdverseSteroid(el.target.value)}}>
                                                    { adverseSteroidDrop && adverseSteroidDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label>Tofacitinib</label>
                                                <select className="form-control" value={adverseTofacitinib} onChange={(el)=>{setAdverseTofacitinib(el.target.value)}}>
                                                    { adverseTofacitDrop && adverseTofacitDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 heaind text-center">
                                                <h3>Complications and Outcome</h3>
                                            </div>
                                            <div className='row'>
                                                <div className="col-lg-12 heaind text-left">
                                                    <h3>Hospitalization</h3>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='from-group'>
                                                        <label>Date of hospitalization </label>
                                                        <input type="date" className='form-control' value={hospitalization} onChange={(el)=>{setHospitalization(el.target.value)}} />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='from-group'>
                                                        <label>Reason of Hospitalization</label>
                                                        <input type="text" placeholder='reason of hospitalization' className='form-control' value={reasonHospitalization} onChange={(el)=>{setReasonHospitalization(el.target.value)}}/>
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
                                                        <select className='form-control' value={megacolon} onChange={(el)=>{setMegacolon(el.target.value)}}>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Massive haemorrhage</label>
                                                        <select className='form-control' value={massiveHaemorrhage} onChange={(el)=>{setMassiveHaemorrhage(el.target.value)}}>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Colorectal Cancer</label>
                                                        <select className='form-control' value={colorectalCancer} onChange={(el)=>{setColorectalCancer(el.target.value)}}>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Perforation</label>
                                                        <select className='form-control' value={perforation} onChange={(el)=>{setPerforation(el.target.value)}}>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Toxic Megacolon</label>
                                                        <select className='form-control' value={toxicMegacolon} onChange={(el)=>{setToxicMegacolon(el.target.value)}}>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Others</label>
                                                        <input type="text" className='form-control' placeholder='Please Specify' value={adverseOthers} onChange={(el)=>{setAdverseOthers(el.target.value)}}/>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Disease behavior</label>
                                                        <select className='form-control' value={diseaseBehavior} onChange={(el)=>{setDiseaseBehavior(el.target.value)}}>
                                                            {diseaseBehaviourDrop && diseaseBehaviourDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Death</label>
                                                        <select className='form-control' value={death} onChange={(el)=>{setDeath(el.target.value)}}>
                                                            {optionDrop && optionDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Date Of Death</label>
                                                        <input type="date" className='form-control' value={dateOfDeath} onChange={(el)=>{setDateOfDeath(el.target.value)}}/>
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label>Cause Of Death</label>
                                                        <input type="text" className='form-control' placeholder='Cause of death' value={causeOfDeath} onChange={(el)=>{setCauseOfDeath(el.target.value)}} />
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
                                            <button to="" className='btn btn-link' onClick={handleAddFollowUp}>Update Follow Up</button>
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

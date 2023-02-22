import React, { useState, useEffect } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { FOLLOWUPAdd, FOLLOWUPGet, SETFOLLOWUPObj, FOLLOWUPUpdate, FOLLOWUPDelete } from "../../redux/actions/FollowUp/FollowUp.actions";
import { DEMOGRAFICGet } from "../../redux/actions/Demografic/Demografic.actions";
export const Viewfollowup = () => {

    useEffect(() => {
        dispatch(DEMOGRAFICGet());
    }, []);

    const [searchParams, setSearchParams] = useSearchParams("edit");
    const [patientId, setPatientId] = useState("");
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
            setPatientName(namePatient);
            setCcfIdName(ccfId);
        }
    }

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
                                        <label><b> Patient ID*  : </b>{patientId}</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Date of Followup  :</b> {followUpDate}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Partial Mayo Score :</b> {partialMayoScore}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Disease Extent : </b>{diseaseExtend}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Total Mayo Score :</b> {totalMayoScore}</label>
                                       
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> UCEIS :</b> {uceis}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Endo Mayo :</b> {endoMayo}</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> SCCAI : </b>{sccai}</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Nancy Index : </b>{nancyIndex}</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Height :</b> {height}</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> RHI : </b>{rhi}</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Weight : </b>{weight}</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Geboe’s Score : </b>{geboeScore}</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> BMI : </b>{bmi}</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Handgrip strength :</b> {handgripStrength}</label>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> MIRT : </b>{mirt}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> MUST : </b>{must}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Reason for Replace :</b> {reasonForReplace}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Height :</b> {height_2}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Weight : </b>{weight_2}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> BMI : </b>{bmi_2}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Mid arm circumference :</b> {midarmCircumference}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Hand grip strength :</b> {handgripStrength_2}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> TSF :</b> {tsf}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> MIRT :</b> {mirt_2}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> MUST :</b> {must_2}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Body Fat :</b> {bodyFat}</label>
                                    </div>
                                </div>
                        
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Visceral Fat :</b> {visceralFat}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Resting Metabolism :</b> {resstingMetabolism}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Subcutaneous fat (whole body) :</b> {subcutaneousWholeBody}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Subcutaneous fat (trunk) :</b> {subcutaneousWholeTrunk}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Subcutaneous fat (arms) :</b> {subcutaneousWholeArm}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Subcutaneous fat (legs) : </b>{subcutaneousWholeLeg}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Skeletal muscle (whole body) :</b> {skeletalWholeBody}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Skeletal muscle (trunk) : </b>{skeletalWholeTrunk}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Skeletal muscle (arms) : </b>{skeletalWholeArm}</label>
                                       
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> Skeletal muscle (legs) :</b> {skeletalWholeLeg}</label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label><b> SM Area : </b>{smArea}</label>
                                        
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
                                                <label><b> HB :</b> {hb}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> HBsAg :</b> {hbsag}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> PCV :</b> {pcv}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> MCV :</b> {mcv}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Anti HCV :</b> {antiHcv}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> TLC :</b> {tlc}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> HIV :</b> {hiv}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> EBV-VCA IgM :</b> {ebvVcaLgm}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> PLT :</b> {plt}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> EBV-VCA IgG :</b> {ebvVcaLgg}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> ESR : </b>{esr}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> EBV-EBNA IgG :</b> {ebvEbnaLgg}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> CRP Quantitative : </b>{crpQuantitative}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> CMV – IgM :</b> {cmvLgm}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> AST :</b> {ast}</label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> CMV – IgG :</b> {cmvLgg}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> ALT :</b> {alt}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Fecal Calprotectin : </b>{fecalCalprotactin}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> PCT :</b> {pct}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> GGT :</b> {ggt}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> CPK :</b> {cpk}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Total proteins :</b> {totalProtien}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Sodium : </b>{sodium}</label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Cholesterol :</b> {cholestrol}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Potassium : </b>{potassium}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> VLDL : </b>{vldl}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> CMV IHC : </b>{cmvIhc}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> LDL : </b>{ldl}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> EBER ISH : </b>{eberIsh}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> HDL :</b> {hdl}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> IGRA : </b>{igra} </label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Triglycerides :</b> {triglycerides}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> ALP : </b>{alp}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Stool Routine :</b> {stoolRoutine}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Albumin :</b> {albumin}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Stool Culture : </b>{stoolCulture} </label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Iron : </b>{iron}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Stool GDH :</b> {stoolGdh}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> TIBC :</b> {tibc}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Stool C-diff Toxin A :</b> {stoolCdiffToxinA}</label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Ferritin :</b> {ferritin}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Stool C-diff PCR : </b>{stoolCdiffPcr}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Calcium :</b> {calcium}</label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Stool Biofilm ;</b> {stoolBiofilm}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Magnesium :</b> {magnesium}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> TPMT :</b> {tpmt}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Vitamin-D : </b>{vitamind}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> NDUT - 15 :</b> {ndut_15}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> RBS : </b>{rbs}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> 6 - TGN :</b> {tgn_6}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> ASCA IgAt :</b> {ascaLgat}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> 6 – MMPR :</b> {mmpr_6}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> ASCA IgG : </b>{ascaLgg}</label>
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Vitamin B12 :</b> {vitaminb_12}</label>
                                            
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> P-ANCA :</b> {pAnca} </label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Folate :</b> {folate}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Urea :</b> {urea}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> VZV Antibody :</b> {vzvAntibody}</label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Creatinine :</b> {creatinine}</label>
                                            
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Chest X Ray :</b> {chestXray}</label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> X Ray abdomen :</b> {xrayAbdomen}</label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Mantoux :</b> {mantoux}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Microbiota :</b> {microbiota}</label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> CT Abdomen :</b> {ctAbdomen}</label>
                                             
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> CT Chest : </b>{ctChest} </label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> MRI Abdomen :</b> {mriAbdomen}</label>
                                              
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Others :</b> {others}</label>
                                               
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
                                                <label><b> Oral 5-ASA :</b> {oral_5asa}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Rectal 5ASA :</b> {rectal5Asa}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> AZA : </b>{aza}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> 6-MP :</b> {mp_6}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Prednisolone :</b> {prednisolone}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Infliximab :</b> {infliximab}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Budesonide :</b> {budesonide}</label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Rectal Steroids :</b> {rectalSteroids}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Adalimunab :</b> {adalimunab}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Vedolizumab :</b> {vedolizumab}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Cyclosporine : </b>{cyclosporine} </label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Ustekinumab :</b> {ustekinumab}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Tofacitinib : </b>{tofacitinib}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Tacrolimus :</b> {tacrolimus}</label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Probiotics : </b>{probiotics}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Filgotinib :</b> {filgotinib} </label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> FMT Capsule : </b>{fmtCapsule} </label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> FMT :</b> {fmt} </label>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <div className='from-group'>
                                                <label><b> Surgery :</b> {surgery}</label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-6'>
                                            <div className='from-group'>
                                                <label><b> If Yes :</b> {surgeryYes}</label>
                                               
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
                                                <label><b> 5-ASA :</b> {adverseAsa} </label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> AZA/6-MP :</b> {adverseAza} </label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Infliximab/ Adalimumab :</b> {adverseInfliximab} </label>
                                                
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Steroids </b>:{adverseSteroid}</label>
                                               
                                            </div>
                                        </div>
                                        <div className='col-lg-4'>
                                            <div className='from-group'>
                                                <label><b> Tofacitinib : </b>{adverseTofacitinib} </label>
                                               
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
                                                        <label><b> Date of hospitalization : </b>{hospitalization}</label>
                                                        
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div className='from-group'>
                                                        <label><b> Reason of Hospitalization :</b> {reasonHospitalization}</label>
                                                       
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className="col-lg-12 heaind text-left">
                                                    <h3>Complications</h3>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label><b> Megacolon :</b> {megacolon}</label>
                                                        
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label><b> Massive haemorrhage : </b>{massiveHaemorrhage} </label>
                                                        
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label><b> Colorectal Cancer :</b> {colorectalCancer}</label>
                                                       
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label><b> Perforation :</b> {perforation} </label>
                                                        
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label><b> Toxic Megacolon :</b> {toxicMegacolon}</label>
                                                        
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label><b> Others :</b> {adverseOthers}</label>
                                                        
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label><b> Disease behavior :</b> {diseaseBehavior}</label>
                                                        
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label><b> Death :</b> {death}</label>
                                                       
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label><b> Date Of Death : </b>{dateOfDeath}</label>
                                                       
                                                    </div>
                                                </div>
                                                <div className='col-lg-4'>
                                                    <div className='from-group'>
                                                        <label><b> Cause Of Death : </b>{causeOfDeath} </label>
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='row'>
                                <div className='col-lg-12'>
                                    <div className='subbtn text-center mt-4 mb-5'>
                                        {(followupObj?._id) ?
                                            <button to="" className='btn btn-link' onClick={handleAddFollowUp}>Update Follow Up</button>
                                            :
                                            <button to="" className='btn btn-link' onClick={handleAddFollowUp}>Add Follow Up</button>
                                        }
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

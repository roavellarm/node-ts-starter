import { IUser } from 'interfaces'

export function renderTemplate(user: IUser) {
  return `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
  xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <meta name="format-detection" content="telephone=no" />
  <title></title>
  <style type="text/css">
    /* Resets */
    .ReadMsgBody {
      width: 100%;
      background-color: #ebebeb;
    }

    .ExternalClass {
      width: 100%;
      background-color: #ebebeb;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height: 100%;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    body {
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
    }

    body {
      margin: 0;
      padding: 0;
    }

    .yshortcuts a {
      border-bottom: none !important;
    }

    .rnb-del-min-width {
      min-width: 0 !important;
    }

    /* Add new outlook css start */
    .templateContainer {
      max-width: 590px !important;
      width: auto !important;
    }

    /* Add new outlook css end */
    /* Image width by default for 3 columns */
    img[class="rnb-col-3-img"] {
      max-width: 170px;
    }

    /* Image width by default for 2 columns */
    img[class="rnb-col-2-img"] {
      max-width: 264px;
    }

    /* Image width by default for 2 columns aside small size */
    img[class="rnb-col-2-img-side-xs"] {
      max-width: 180px;
    }

    /* Image width by default for 2 columns aside big size */
    img[class="rnb-col-2-img-side-xl"] {
      max-width: 350px;
    }

    /* Image width by default for 1 column */
    img[class="rnb-col-1-img"] {
      max-width: 550px;
    }

    /* Image width by default for header */
    img[class="rnb-header-img"] {
      max-width: 590px;
    }

    /* Ckeditor line-height spacing */
    .rnb-force-col p,
    ul,
    ol {
      margin: 0px !important;
    }

    .rnb-del-min-width p,
    ul,
    ol {
      margin: 0px !important;
    }

    /* tmpl-2 preview */
    .rnb-tmpl-width {
      width: 100% !important;
    }

    /* tmpl-11 preview */
    .rnb-social-width {
      padding-right: 15px !important;
    }

    /* tmpl-11 preview */
    .rnb-social-align {
      float: right !important;
    }

    /* Ul Li outlook extra spacing fix */
    li {
      mso-margin-top-alt: 0;
      mso-margin-bottom-alt: 0;
    }

    /* Outlook fix */
    table {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    /* Outlook fix */
    table,
    tr,
    td {
      border-collapse: collapse;
    }

    /* Outlook fix */
    p,
    a,
    li,
    blockquote {
      mso-line-height-rule: exactly;
    }

    /* Outlook fix */
    .msib-right-img {
      mso-padding-alt: 0 !important;
    }

    @media only screen and (min-width:590px) {

      /* mac fix width */
      .templateContainer {
        width: 590px !important;
      }
    }

    @media screen and (max-width: 360px) {

      /* yahoo app fix width "tmpl-2 tmpl-10 tmpl-13" in android devices */
      .rnb-yahoo-width {
        width: 360px !important;
      }
    }

    @media screen and (max-width: 380px) {

      /* fix width and font size "tmpl-4 tmpl-6" in mobile preview */
      .element-img-text {
        font-size: 24px !important;
      }

      .element-img-text2 {
        width: 230px !important;
      }

      .content-img-text-tmpl-6 {
        font-size: 24px !important;
      }

      .content-img-text2-tmpl-6 {
        width: 220px !important;
      }
    }

    @media screen and (max-width: 480px) {
      td[class="rnb-container-padding"] {
        padding-left: 10px !important;
        padding-right: 10px !important;
      }

      /* force container nav to (horizontal) blocks */
      td.rnb-force-nav {
        display: inherit;
      }

      /* fix text alignment "tmpl-11" in mobile preview */
      .rnb-social-text-left {
        width: 100%;
        text-align: center;
        margin-bottom: 15px;
      }

      .rnb-social-text-right {
        width: 100%;
        text-align: center;
      }
    }

    @media only screen and (max-width: 600px) {

      /* center the address &amp; social icons */
      .rnb-text-center {
        text-align: center !important;
      }

      /* force container columns to (horizontal) blocks */
      th.rnb-force-col {
        display: block;
        padding-right: 0 !important;
        padding-left: 0 !important;
        width: 100%;
      }

      table.rnb-container {
        width: 100% !important;
      }

      table.rnb-btn-col-content {
        width: 100% !important;
      }

      table.rnb-col-3 {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
        /* change left/right padding and margins to top/bottom ones */
        margin-bottom: 10px;
        padding-bottom: 10px;
        /*border-bottom: 1px solid #eee;*/
      }

      table.rnb-last-col-3 {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
      }

      table.rnb-col-2 {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
        /* change left/right padding and margins to top/bottom ones */
        margin-bottom: 10px;
        padding-bottom: 10px;
        /*border-bottom: 1px solid #eee;*/
      }

      table.rnb-col-2-noborder-onright {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
        /* change left/right padding and margins to top/bottom ones */
        margin-bottom: 10px;
        padding-bottom: 10px;
      }

      table.rnb-col-2-noborder-onleft {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
        /* change left/right padding and margins to top/bottom ones */
        margin-top: 10px;
        padding-top: 10px;
      }

      table.rnb-last-col-2 {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
      }

      table.rnb-col-1 {
        /* unset table align="left/right" */
        float: none !important;
        width: 100% !important;
      }

      img.rnb-col-3-img {
        /**max-width:none !important;**/
        width: 100% !important;
      }

      img.rnb-col-2-img {
        /**max-width:none !important;**/
        width: 100% !important;
      }

      img.rnb-col-2-img-side-xs {
        /**max-width:none !important;**/
        width: 100% !important;
      }

      img.rnb-col-2-img-side-xl {
        /**max-width:none !important;**/
        width: 100% !important;
      }

      img.rnb-col-1-img {
        /**max-width:none !important;**/
        width: 100% !important;
      }

      img.rnb-header-img {
        /**max-width:none !important;**/
        width: 100% !important;
        margin: 0 auto;
      }

      img.rnb-logo-img {
        /**max-width:none !important;**/
        width: 100% !important;
      }

      td.rnb-mbl-float-none {
        float: inherit !important;
      }

      .img-block-center {
        text-align: center !important;
      }

      .logo-img-center {
        float: inherit !important;
      }

      /* tmpl-11 preview */
      .rnb-social-align {
        margin: 0 auto !important;
        float: inherit !important;
      }

      /* tmpl-11 preview */
      .rnb-social-center {
        display: inline-block;
      }

      /* tmpl-11 preview */
      .social-text-spacing {
        margin-bottom: 0px !important;
        padding-bottom: 0px !important;
      }

      /* tmpl-11 preview */
      .social-text-spacing2 {
        padding-top: 15px !important;
      }

      /* UL bullet fixed in outlook */
      ul {
        mso-special-format: bullet;
      }
    }
  </style>
  <style type="text/css">
    table {
      border-spacing: 0;
    }

    table td {
      border-collapse: collapse;
    }
  </style>
</head>

<body>
  <table border="0" align="center" width="100%" cellpadding="0" cellspacing="0" class="main-template" bgcolor="#f9fafc"
    style="background-color: rgb(249, 250, 252);">

    <tbody>
      <tr>
        <td align="center" valign="top">
          <table border="0" cellpadding="0" cellspacing="0" width="590" class="templateContainer"
            style="max-width:590px!important; width: 590px;">
            <tbody>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(249, 250, 252);">

                    <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0"
                      cellspacing="0" style="min-width:590px;" name="Layout_20" id="Layout_20">

                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" valign="top" align="center" style="min-width: 590px;">
                            <a href="#" name="Layout_20"></a>
                            <table width="100%" cellpadding="0" border="0" bgcolor="#f9fafc" align="center"
                              cellspacing="0" style="background-color: rgb(249, 250, 252);">
                              <tbody>
                                <tr>
                                  <td height="10" style="font-size:1px; line-height:1px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td align="center" height="20"
                                    style="font-family:'Sanchez','Arial',Helvetica,sans-serif; color:#cccccc;font-size:13px;font-weight:normal;text-align: center;">
                                    <span style="color: rgb(204, 204, 204); text-decoration: none;">
                                      <a target="_blank" href="{{ mirror }}"
                                        style="text-decoration: none; color: rgb(204, 204, 204);">View in
                                        browser</a></span>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="10" style="font-size:1px; line-height:1px; mso-hide: all;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="border-radius: 0px;">
                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0"
                      style="min-width:590px;" name="Layout_5" id="Layout_5">
                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" align="center" valign="top" style="min-width:590px;">
                            <a href="#" name="Layout_5"></a>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container"
                              bgcolor="#"
                              style="border-radius: 0px; padding-left: 20px; padding-right: 20px; border-collapse: separate;">
                              <tbody>
                                <tr>
                                  <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td valign="top" class="rnb-container-padding" align="left">
                                    <table width="100%" cellpadding="0" border="0" align="center" cellspacing="0">
                                      <tbody>
                                        <tr>
                                          <td valign="top" align="center">
                                            <table cellpadding="0" border="0" align="center" cellspacing="0"
                                              class="logo-img-center">
                                              <tbody>
                                                <tr>
                                                  <td valign="middle" align="center" style="line-height: 1px;">
                                                    <div
                                                      style="border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block; "
                                                      cellspacing="0" cellpadding="0" border="0">
                                                      <div><img width="250" vspace="0" hspace="0" border="0"
                                                          alt="Sendinblue"
                                                          style="float: left;max-width:250px;display:block;"
                                                          class="rnb-logo-img"
                                                          src="http://img.mailinblue.com/1172781/images/rnb/original/5b22e635c8879b23012cbca8.png">
                                                      </div>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                            <table cellpadding="0" border="0" align="center" cellspacing="0"
                                              class="logo-img-center" style="display: inline-block;">
                                              <tbody>
                                                <tr>
                                                  <td height="20"
                                                    style="font-size:1px; line-height:1px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td width="auto" valign="middle" align="center" height="20"
                                                    class="rnb-force-nav"
                                                    style="font-size:16px; font-family:'Sanchez','Arial',Helvetica,sans-serif; text-align:center; color:#555; font-weight:normal; padding-left:14px; padding-right:14px;">
                                                    <span style="color:#888888;">
                                                      <a style="text-decoration:none; color:#888888;" name=""
                                                        target="_blank">SHOP</a>
                                                    </span>
                                                  </td>
                                                  <td width="auto" valign="middle" align="center" height="20"
                                                    class="rnb-force-nav"
                                                    style="font-size:16px; font-family:'Sanchez','Arial',Helvetica,sans-serif; text-align:center; color:#555; font-weight:normal; padding-left:14px; padding-right:14px;">
                                                    <span style="color:#888888;">
                                                      <a style="text-decoration:none; color:#888888;" name=""
                                                        target="_blank">LEARN</a>
                                                    </span>
                                                  </td>
                                                  <td width="auto" valign="middle" align="center" height="20"
                                                    class="rnb-force-nav"
                                                    style="font-size:16px; font-family:'Sanchez','Arial',Helvetica,sans-serif; text-align:center; color:#555; font-weight:normal; padding-left:14px; padding-right:14px;">
                                                    <span style="color:#888888;">
                                                      <a style="text-decoration:none; color:#888888;" name=""
                                                        target="_blank">HELP</a>
                                                    </span>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="30" style="font-size:1px; line-height:30px; mso-hide: all;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(239, 83, 80); border-radius: 0px;">
                    <table width="100%" cellpadding="0" border="0" cellspacing="0" name="Layout_6" id="Layout_6">
                      <tbody>
                        <tr>
                          <td align="center" valign="top"><a href="#" name="Layout_6"></a>
                            <table border="0" width="100%" cellpadding="0" cellspacing="0" class="rnb-container"
                              bgcolor="#EF5350"
                              style="height: 0px; background-color: rgb(239, 83, 80); border-radius: 0px; border-collapse: separate; padding: 20px;">
                              <tbody>
                                <tr>
                                  <td class="rnb-container-padding" style="font-size: px;font-family: ; color: ;">

                                    <table border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container"
                                      align="center" style="margin:auto;">
                                      <tbody>
                                        <tr>

                                          <th class="rnb-force-col" align="center"
                                            style="text-align: center; font-weight: normal">

                                            <table border="0" cellspacing="0" cellpadding="0" align="center"
                                              class="rnb-col-1">

                                              <tbody>
                                                <tr>
                                                  <td height="10"></td>
                                                </tr>

                                                <tr>
                                                  <td
                                                    style="font-family:'Sanchez','Arial',Helvetica,sans-serif; color:#3c4858; text-align:center;">

                                                    <span style="color:#3c4858;"><span style="font-size:36px;"><span
                                                          style="color:#FFFFFF;"><b>Imagens
                                                            Arte</b></span></span></span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="10"></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </th>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>

                              </tbody>
                            </table>

                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(255, 255, 255);">
                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0"
                      style="min-width:100%; -webkit-backface-visibility: hidden; line-height: 10px;" name="Layout_17"
                      id="Layout_17">
                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" valign="top" align="center" style="min-width: 590px;">
                            <a href="#" name="Layout_17"></a>
                            <table width="100%" class="rnb-container" cellpadding="0" border="0" bgcolor="#ffffff"
                              align="center" cellspacing="0" style="background-color: rgb(255, 255, 255);">
                              <tbody>
                                <tr>
                                  <td valign="top" align="center">
                                    <table cellspacing="0" cellpadding="0" border="0">
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div
                                              style="border-radius:0px; width:590;;max-width:1200px !important;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;border-collapse: separate;border-radius: 0px;">
                                              <div><img ng-if="col.img.source != 'url'" border="0" hspace="0" vspace="0"
                                                  width="590" class="rnb-header-img" alt=""
                                                  style="display:block; float:left; border-radius: 0px; "
                                                  src="http://img.mailinblue.com/1172781/images/rnb/original/5b216e719d579c14bb36aeec.jpg">
                                              </div>
                                              <div style="clear:both;"></div>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>

                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">
                  <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">
                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0"
                      style="min-width:100%;" name="Layout_18">
                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" align="center" valign="top">
                            <a href="#" name="Layout_18"></a>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container"
                              bgcolor="#ffffff"
                              style="background-color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);">

                              <tbody>
                                <tr>
                                  <td height="30" style="font-size:1px; line-height:30px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td valign="top" class="rnb-container-padding" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                      class="rnb-columns-container">
                                      <tbody>
                                        <tr>
                                          <th class="rnb-force-col"
                                            style="text-align: left; font-weight: normal; padding-right: 0px;"
                                            valign="top">

                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" width="100%"
                                              align="left" class="rnb-col-1">

                                              <tbody>
                                                <tr>
                                                  <td
                                                    style="font-size:14px; font-family:'Sanchez','Arial',Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                    <div style="line-height:24px;">
                                                      <span style="font-size:18px;"><span
                                                          style="color:#EF5350;"><strong>Olá ${user.firstname},</strong></span></span>
                                                    </div>

                                                    <ul>
                                                    </ul>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>

                                          </th>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">
                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0"
                      style="min-width:100%;" name="Layout_19">
                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" align="center" valign="top">
                            <a href="#" name="Layout_19"></a>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container"
                              bgcolor="#ffffff"
                              style="background-color: rgb(255, 255, 255); padding-left: 20px; padding-right: 20px; border-collapse: separate; border-radius: 0px; border-bottom: 0px none rgb(200, 200, 200);">

                              <tbody>
                                <tr>
                                  <td height="0" style="font-size:1px; line-height:0px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td valign="top" class="rnb-container-padding" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                      class="rnb-columns-container">
                                      <tbody>
                                        <tr>
                                          <th class="rnb-force-col"
                                            style="text-align: left; font-weight: normal; padding-right: 0px;"
                                            valign="top">

                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" width="100%"
                                              align="left" class="rnb-col-1">

                                              <tbody>
                                                <tr>
                                                  <td
                                                    style="font-size:14px; font-family:'Montserrat','Arial',Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                    <div style="line-height:24px;"><span
                                                        style="color: rgb(136, 136, 136); font-size: 16px; background-color: transparent;">Clique
                                                        aqui para confirmar seu cadastro na nossa plataforma</span>
                                                    </div>

                                                    <div style="line-height:24px;"><span
                                                        style="color: rgb(136, 136, 136); font-size: 16px; background-color: transparent;">&nbsp;</span>
                                                    </div>

                                                    <div><span style="font-size:16px;"><span
                                                          style="color:#888888;">Carinhosamente,</span></span></div>

                                                    <div style="line-height:24px;"><br>
                                                      <span style="font-size:16px;"><span
                                                          style="color:#888888;"><em>Imagens Arte</em></span></span>
                                                    </div>

                                                    <ul>
                                                    </ul>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>

                                          </th>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="40" style="font-size:1px; line-height:40px; mso-hide: all;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(239, 83, 80); border-radius: 0px;">
                    <table width="100%" cellpadding="0" border="0" cellspacing="0" name="Layout_" id="Layout_">
                      <tbody>
                        <tr>
                          <td align="center" valign="top"><a href="#" name="Layout_"></a>
                            <table border="0" width="100%" cellpadding="0" cellspacing="0" class="rnb-container"
                              bgcolor="#EF5350"
                              style="height: 0px; background-color: rgb(239, 83, 80); border-radius: 0px; border-collapse: separate; padding: 10px 20px;">
                              <tbody>
                                <tr>
                                  <td class="rnb-container-padding" style="font-size: px;font-family: ; color: ;">

                                    <table border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container"
                                      align="center" style="margin:auto;">
                                      <tbody>
                                        <tr>

                                          <th class="rnb-force-col" align="center"
                                            style="text-align: center; font-weight: normal">

                                            <table border="0" cellspacing="0" cellpadding="0" align="center"
                                              class="rnb-col-1">

                                              <tbody>
                                                <tr>
                                                  <td height="10"></td>
                                                </tr>

                                                <tr>
                                                  <td
                                                    style="font-family:'Sanchez','Arial',Helvetica,sans-serif; color:#3c4858; text-align:center;">

                                                    <span style="color:#3c4858;"><span style="color:#FFFFFF;"><span
                                                          style="font-size:24px;">Featured Blends this
                                                          Mont<strong>h</strong></span></span></span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="10"></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </th>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>

                              </tbody>
                            </table>

                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(255, 255, 255); border-radius: 0px;">
                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0"
                      style="min-width:100%;" name="Layout_" id="Layout_">
                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" align="center" valign="top">
                            <a href="#" name="Layout_"></a>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container"
                              bgcolor="#ffffff"
                              style="max-width: 100%; min-width: 100%; table-layout: fixed; background-color: rgb(255, 255, 255); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;">
                              <tbody>
                                <tr>
                                  <td height="30" style="font-size:1px; line-height:30px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td valign="top" class="rnb-container-padding" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                      class="rnb-columns-container">
                                      <tbody>
                                        <tr>
                                          <th class="rnb-force-col"
                                            style="text-align: left; font-weight: normal; padding-right: 20px;"
                                            width="265" valign="top">
                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" align="left"
                                              class="rnb-col-2" width="265">
                                              <tbody>
                                                <tr>
                                                  <td width="100%" class="img-block-center" valign="top" align="left">
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                      <tbody>
                                                        <tr>
                                                          <td width="100%" valign="top" align="left"
                                                            class="img-block-center">
                                                            <table style="display:inline-block;" cellspacing="0"
                                                              cellpadding="0" border="0">
                                                              <tbody>
                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      style="border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block;">
                                                                      <div><img border="0" width="265" hspace="0"
                                                                          vspace="0" alt="" class="rnb-col-2-img"
                                                                          src="http://img.mailinblue.com/1172781/images/rnb/original/5b216e819d579c2193552bb8.jpg"
                                                                          style="vertical-align: top; max-width: 1500px; float: left;">
                                                                      </div>
                                                                      <div style="clear:both;"></div>
                                                                    </div>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>

                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="18" class="col_td_gap"
                                                    style="font-size:1px; line-height:18px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    style="font-size:24px; font-family:'Sanchez','Arial',Helvetica,sans-serif; color:#3c4858; text-align:center;">
                                                    <span style="color:#3c4858; "><span
                                                        style="color:#EF5350;"><strong><span
                                                            style="font-size:18px;">Light: Brazilian
                                                            Blend</span></strong></span></span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="18" class="col_td_gap"
                                                    style="font-size:1px; line-height:18px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    style="font-size:14px; font-family:'Montserrat','Arial',Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                    <div>
                                                      <div style="line-height: 24px; text-align: center;"><span
                                                          style="font-size:16px;"><span style="color:#888888;">Lorem
                                                            ipsum dolor </span><a href="#"
                                                            style="text-decoration: underline; color: rgb(136, 136, 136);"><span
                                                              style="color:#888888;">sit amet,consectetur
                                                              adipisicing</span></a><span style="color:#888888;"> elit,
                                                            sed do incididunt utlabore etdolore magna
                                                            aliqua.</span></span></div>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="18" class="col_td_gap"
                                                    style="font-size:1px; line-height:18px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td valign="top">
                                                    <table cellpadding="0" border="0" align="center" cellspacing="0"
                                                      class="rnb-btn-col-content"
                                                      style="border-collapse: separate;margin:0 auto;">
                                                      <tbody>
                                                        <tr>
                                                          <td width="auto" valign="middle" bgcolor="#EF5350"
                                                            align="center" height="40"
                                                            style="font-size:16px; font-family:'Sanchez','Arial',Helvetica,sans-serif; text-align:center; color:#ffffff; font-weight:normal; padding-left:18px; padding-right:18px; background-color:#EF5350; border-radius:0px;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;">
                                                            <span style="color:#ffffff; font-weight:normal;">
                                                              <a style="text-decoration:none; color:#ffffff; font-weight:normal;"
                                                                target="_blank">Buy Now&nbsp;›</a>
                                                            </span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>

                                          </th>
                                          <th class="rnb-force-col"
                                            style="text-align: left; font-weight: normal; padding-right: 0px;"
                                            width="265" valign="top">
                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" align="left"
                                              class="rnb-last-col-2" width="265">
                                              <tbody>
                                                <tr>
                                                  <td width="100%" class="img-block-center" valign="top" align="left">
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                      <tbody>
                                                        <tr>
                                                          <td width="100%" valign="top" align="left"
                                                            class="img-block-center">
                                                            <table style="display:inline-block;" cellspacing="0"
                                                              cellpadding="0" border="0">
                                                              <tbody>
                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      style="border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block;">
                                                                      <div><img border="0" width="265" hspace="0"
                                                                          vspace="0" alt="" class="rnb-col-2-img"
                                                                          src="http://img.mailinblue.com/1172781/images/rnb/original/5b216e899d579c1eb010a514.jpg"
                                                                          style="vertical-align: top; max-width: 1500px; float: left;">
                                                                      </div>
                                                                      <div style="clear:both;"></div>
                                                                    </div>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>

                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="18" class="col_td_gap"
                                                    style="font-size:1px; line-height:18px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    style="font-size:24px; font-family:'Sanchez','Arial',Helvetica,sans-serif; color:#3c4858; text-align:center;">
                                                    <span style="color:#3c4858; "><span
                                                        style="color:#EF5350;"><strong><span
                                                            style="font-size:18px;">Dark: Italian
                                                            Blend</span></strong></span></span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="18" class="col_td_gap"
                                                    style="font-size:1px; line-height:18px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    style="font-size:14px; font-family:'Montserrat','Arial',Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                    <div>
                                                      <div style="line-height: 24px; text-align: center;"><span
                                                          style="color:#888888;">L<span style="font-size:16px;">orem
                                                            ipsum dolor </span></span><span style="font-size:16px;"><a
                                                            href="#"
                                                            style="text-decoration: underline; color: rgb(136, 136, 136);"><span
                                                              style="color:#888888;">sit amet,consectetur
                                                              adipisicing</span></a><span style="color:#888888;"> elit,
                                                            sed do incididunt utlabore etdolore magna
                                                            aliqua.</span></span></div>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="18" class="col_td_gap"
                                                    style="font-size:1px; line-height:18px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td valign="top">
                                                    <table cellpadding="0" border="0" align="center" cellspacing="0"
                                                      class="rnb-btn-col-content"
                                                      style="border-collapse: separate;margin:0 auto;">
                                                      <tbody>
                                                        <tr>
                                                          <td width="auto" valign="middle" bgcolor="#EF5350"
                                                            align="center" height="40"
                                                            style="font-size:16px; font-family:'Sanchez','Arial',Helvetica,sans-serif; text-align:center; color:#ffffff; font-weight:normal; padding-left:18px; padding-right:18px; background-color:#EF5350; border-radius:0px;border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;">
                                                            <span style="color:#ffffff; font-weight:normal;">
                                                              <a style="text-decoration:none; color:#ffffff; font-weight:normal;"
                                                                target="_blank">Buy Now&nbsp;›</a>
                                                            </span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>

                                          </th>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="40" style="font-size:1px; line-height:40px; mso-hide: all;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(213, 170, 128); border-radius: 0px;">
                    <table width="100%" cellpadding="0" border="0" cellspacing="0" name="Layout_8" id="Layout_8">
                      <tbody>
                        <tr>
                          <td align="center" valign="top"><a href="#" name="Layout_8"></a>
                            <table border="0" width="100%" cellpadding="0" cellspacing="0" class="rnb-container"
                              bgcolor="#d5aa80"
                              style="height: 0px; background-color: rgb(213, 170, 128); border-radius: 0px; border-collapse: separate; padding: 10px 20px;">
                              <tbody>
                                <tr>
                                  <td class="rnb-container-padding" style="font-size: px;font-family: ; color: ;">

                                    <table border="0" cellpadding="0" cellspacing="0" class="rnb-columns-container"
                                      align="center" style="margin:auto;">
                                      <tbody>
                                        <tr>

                                          <th class="rnb-force-col" align="center"
                                            style="text-align: center; font-weight: normal">

                                            <table border="0" cellspacing="0" cellpadding="0" align="center"
                                              class="rnb-col-1">

                                              <tbody>
                                                <tr>
                                                  <td height="10"></td>
                                                </tr>

                                                <tr>
                                                  <td
                                                    style="font-family:'Sanchez','Arial',Helvetica,sans-serif; color:#3c4858; text-align:center;">

                                                    <span style="color:#3c4858;"><span style="font-size:24px;"><span
                                                          style="color:#FFFFFF;">Helpful Coffee
                                                          Articles</span></span></span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="10"></td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </th>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>

                              </tbody>
                            </table>

                          </td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(213, 170, 128); border-radius: 0px;">
                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0"
                      style="min-width:100%;" name="Layout_10" id="Layout_10">
                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" align="center" valign="top">
                            <a href="#" name="Layout_10"></a>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container"
                              bgcolor="#d5aa80"
                              style="max-width: 100%; min-width: 100%; table-layout: fixed; background-color: rgb(213, 170, 128); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;">
                              <tbody>
                                <tr>
                                  <td height="0" style="font-size:1px; line-height:0px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td valign="top" class="rnb-container-padding" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                      class="rnb-columns-container">
                                      <tbody>
                                        <tr>
                                          <th class="rnb-force-col"
                                            style="text-align: left; font-weight: normal; padding-right: 0px;"
                                            width="550" valign="top">
                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" align="left"
                                              class="rnb-col-1" width="550">
                                              <tbody>
                                                <tr>
                                                  <td width="100%" class="img-block-center" valign="top" align="left">
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                      <tbody>
                                                        <tr>
                                                          <td width="100%" valign="top" align="left"
                                                            class="img-block-center">
                                                            <table style="display:inline-block;" cellspacing="0"
                                                              cellpadding="0" border="0">
                                                              <tbody>
                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      style="border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block;">
                                                                      <div><img border="0" width="550" hspace="0"
                                                                          vspace="0" alt="" class="rnb-col-1-img"
                                                                          src="http://img.mailinblue.com/1172781/images/rnb/original/5b21706a9d579c392f1c7492.jpg"
                                                                          style="vertical-align: top; max-width: 1200px; float: left;">
                                                                      </div>
                                                                      <div style="clear:both;"></div>
                                                                    </div>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>

                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="10" class="col_td_gap"
                                                    style="font-size:1px; line-height:10px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    style="font-size:24px; font-family:'Sanchez','Arial',Helvetica,sans-serif; color:#3c4858; text-align:left;">
                                                    <span style="color:#3c4858; "><span style="font-size:22px;"><span
                                                          style="color:#FFFFFF;">How to know when you need to clean your
                                                          coffee machine</span></span></span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="10" class="col_td_gap"
                                                    style="font-size:1px; line-height:10px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    style="font-size:14px; font-family:'Montserrat','Arial',Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                    <div>
                                                      <div style="line-height:24px;"><span style="font-size:16px;"><span
                                                            style="color:#FFFFFF;">Get tips on knowing when you need to
                                                            clean your coffee maker and how you can do it the right
                                                            way.</span></span><br>
                                                        &nbsp;</div>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="10" class="col_td_gap"
                                                    style="font-size:1px; line-height:10px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td valign="top">
                                                    <table cellpadding="0" border="0" align="left" cellspacing="0"
                                                      class="rnb-btn-col-content"
                                                      style="border-collapse: separate;margin:0 auto;">
                                                      <tbody>
                                                        <tr>
                                                          <td width="auto" valign="middle" bgcolor="#EF5350"
                                                            align="left" height="40"
                                                            style="font-size:16px; font-family:'Sanchez','Arial',Helvetica,sans-serif; text-align:center; color:#ffffff; font-weight:normal; padding-left:18px; padding-right:18px; background-color:#EF5350; border-radius:0px;border-top:0px None #9c9c9c;border-right:0px None #9c9c9c;border-bottom:0px None #9c9c9c;border-left:0px None #9c9c9c;">
                                                            <span style="color:#ffffff; font-weight:normal;">
                                                              <a style="text-decoration:none; color:#ffffff; font-weight:normal;"
                                                                target="_blank">Read the article ›</a>
                                                            </span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>

                                          </th>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(213, 170, 128); border-radius: 0px;">
                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0"
                      style="min-width:100%;" name="Layout_11" id="Layout_11">
                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" align="center" valign="top">
                            <a href="#" name="Layout_11"></a>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container"
                              bgcolor="#d5aa80"
                              style="max-width: 100%; min-width: 100%; table-layout: fixed; background-color: rgb(213, 170, 128); border-radius: 0px; border-collapse: separate; padding-left: 20px; padding-right: 20px;">
                              <tbody>
                                <tr>
                                  <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td valign="top" class="rnb-container-padding" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                      class="rnb-columns-container">
                                      <tbody>
                                        <tr>
                                          <th class="rnb-force-col"
                                            style="text-align: left; font-weight: normal; padding-right: 0px;"
                                            width="550" valign="top">
                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" align="left"
                                              class="rnb-col-1" width="550">
                                              <tbody>
                                                <tr>
                                                  <td width="100%" class="img-block-center" valign="top" align="left">
                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                      <tbody>
                                                        <tr>
                                                          <td width="100%" valign="top" align="left"
                                                            class="img-block-center">
                                                            <table style="display:inline-block;" cellspacing="0"
                                                              cellpadding="0" border="0">
                                                              <tbody>
                                                                <tr>
                                                                  <td>
                                                                    <div
                                                                      style="border-top:0px None #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block;">
                                                                      <div><img border="0" width="550" hspace="0"
                                                                          vspace="0" alt="" class="rnb-col-1-img"
                                                                          src="http://img.mailinblue.com/1172781/images/rnb/original/5b2172d09d579c1e2314f71a.jpg"
                                                                          style="vertical-align: top; max-width: 1200px; float: left;">
                                                                      </div>
                                                                      <div style="clear:both;"></div>
                                                                    </div>
                                                                  </td>
                                                                </tr>
                                                              </tbody>
                                                            </table>

                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="10" class="col_td_gap"
                                                    style="font-size:1px; line-height:10px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    style="font-size:24px; font-family:'Sanchez','Arial',Helvetica,sans-serif; color:#3c4858; text-align:left;">
                                                    <span style="color:#3c4858; "><span style="font-size:22px;"><span
                                                          style="color:#FFFFFF;">6 Things to Check Before You Make Your
                                                          Next Coffee Purchase</span></span></span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="10" class="col_td_gap"
                                                    style="font-size:1px; line-height:10px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td
                                                    style="font-size:14px; font-family:'Montserrat','Arial',Helvetica,sans-serif, sans-serif; color:#3c4858;">
                                                    <div>
                                                      <div style="line-height:24px;"><span style="font-size:16px;"><span
                                                            style="color:#FFFFFF;">When buying coffee, it's important to
                                                            check a few things before swiping your
                                                            Visa.</span></span><br>
                                                        &nbsp;</div>
                                                    </div>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="10" class="col_td_gap"
                                                    style="font-size:1px; line-height:10px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td valign="top">
                                                    <table cellpadding="0" border="0" align="left" cellspacing="0"
                                                      class="rnb-btn-col-content"
                                                      style="border-collapse: separate;margin:0 auto;">
                                                      <tbody>
                                                        <tr>
                                                          <td width="auto" valign="middle" bgcolor="#EF5350"
                                                            align="left" height="40"
                                                            style="font-size:16px; font-family:'Sanchez','Arial',Helvetica,sans-serif; text-align:center; color:#ffffff; font-weight:normal; padding-left:18px; padding-right:18px; background-color:#EF5350; border-radius:0px;border-top:0px None #9c9c9c;border-right:0px None #9c9c9c;border-bottom:0px None #9c9c9c;border-left:0px None #9c9c9c;">
                                                            <span style="color:#ffffff; font-weight:normal;">
                                                              <a style="text-decoration:none; color:#ffffff; font-weight:normal;"
                                                                target="_blank">Read the article ›</a>
                                                            </span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                  <!--[if gte mso 9]><span style="font-size:0px;line-height:0px; mso-hide: all;">&nbsp;</span><![endif]-->
                                                </tr>
                                              </tbody>
                                            </table>

                                          </th>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="40" style="font-size:1px; line-height:40px; mso-hide: all;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(239, 83, 80); border-radius: 0px;">
                    <table class="rnb-del-min-width" width="100%" cellpadding="0" border="0" cellspacing="0"
                      style="min-width:100%;" name="Layout_12" id="Layout_12">
                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" align="center" valign="top">
                            <a href="#" name="Layout_12"></a>
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="rnb-container"
                              bgcolor="#EF5350"
                              style="max-width: 100%; min-width: 100%; table-layout: fixed; background-color: rgb(239, 83, 80); border-radius: 0px; border-collapse: separate; padding: 30px 20px 40px;">
                              <tbody>
                                <tr>
                                  <td valign="top" class="rnb-container-padding" align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                      class="rnb-columns-container">
                                      <tbody>
                                        <tr>

                                          <th class="rnb-force-col img-block-center"
                                            style="text-align: left; font-weight: normal; padding-right: 20px;"
                                            valign="top" width="180">

                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" align="left"
                                              class="rnb-col-2-noborder-onright" width="180">


                                              <tbody>
                                                <tr>
                                                  <td width="100%" style="line-height: auto;" class="img-block-center"
                                                    valign="top" align="center">
                                                    <div
                                                      style="border-top:0px none #000;border-right:0px None #000;border-bottom:0px None #000;border-left:0px None #000;display:inline-block;">
                                                      <div><img alt="" border="0" hspace="0" vspace="0" width="125"
                                                          style="vertical-align:top; float: left; width:125px;max-width:125px !important; "
                                                          class="rnb-col-2-img-side-xs"
                                                          src="http://img.mailinblue.com/1172781/images/rnb/original/5b22ec5bc8879b43b5146758.png">
                                                      </div>
                                                      <div style="clear:both;"></div>
                                                    </div>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </th>
                                          <th class="rnb-force-col" style="text-align: left; font-weight: normal"
                                            valign="top">

                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" width="350"
                                              align="left" class="rnb-last-col-2">

                                              <tbody>
                                                <tr>
                                                  <td
                                                    style="font-size:24px; font-family:'Sanchez','Arial',Helvetica,sans-serif; color:#3c4858; text-align:center;">
                                                    <span style="color:#3c4858; "><span style="font-size:22px;"><span
                                                          style="color:#FFFFFF;">Refer a friend for free
                                                          coffee!</span></span></span>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="10"
                                                    style="font-size:1px; line-height:10px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td class="rnb-mbl-float-none"
                                                    style="font-size:14px; font-family:'Montserrat','Arial',Helvetica,sans-serif;color:#3c4858;float:right;width:350px;">
                                                    <div style="line-height: 24px; text-align: center;"><span
                                                        style="font-size:16px;"><span style="color:#FFFFFF;">For each
                                                          friend that you refer to Sekai Coffee, you will receive $5 off
                                                          your next order. And don't worry -- your friends will also get
                                                          $5 off their first purchase.</span></span></div>
                                                  </td>
                                                </tr>
                                                <tr>
                                                  <td height="10"
                                                    style="font-size:1px; line-height:10px; mso-hide: all;">&nbsp;</td>
                                                </tr>
                                                <tr>
                                                  <td valign="top">
                                                    <table cellpadding="0" border="0" align="center" cellspacing="0"
                                                      class="rnb-btn-col-content" style="border-collapse: separate;">

                                                      <tbody>
                                                        <tr>
                                                          <td width="auto" valign="middle" bgcolor="#EF5350"
                                                            align="center" height="42"
                                                            style="font-size:16px; font-family:'Sanchez','Arial',Helvetica,sans-serif; text-align:center; color:#ffffff; font-weight:normal; padding-left:14px; padding-right:14px; background-color:#EF5350; border-radius:0px;border-top:2px Solid #ffffff;border-right:2px Solid #ffffff;border-bottom:2px Solid #ffffff;border-left:2px Solid #ffffff;border-collapse: separate;">
                                                            <span style="color:#ffffff; font-weight:normal;">
                                                              <a style="text-decoration:none; color:#ffffff; font-weight:normal;"
                                                                target="_blank">Refer a friend&nbsp; ›</a>

                                                            </span>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>

                                                </tr>
                                              </tbody>
                                            </table>
                                          </th>

                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(249, 250, 252);">

                    <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0"
                      cellspacing="0" style="min-width:590px;" name="Layout_" id="Layout_">
                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" align="center" valign="top" bgcolor="#f9fafc"
                            style="min-width: 590px; background-color: rgb(249, 250, 252);">
                            <a href="#" name="Layout_"></a>
                            <table width="590" class="rnb-container" cellpadding="0" border="0" align="center"
                              cellspacing="0">
                              <tbody>
                                <tr>
                                  <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td valign="top" class="rnb-container-padding"
                                    style="font-size: 14px; font-family: 'Montserrat','Arial',Helvetica,sans-serif; color: #888888;"
                                    align="left">

                                    <table width="100%" border="0" cellpadding="0" cellspacing="0"
                                      class="rnb-columns-container">
                                      <tbody>
                                        <tr>
                                          <th class="rnb-force-col"
                                            style="padding-right:20px; padding-left:20px; mso-padding-alt: 0 0 0 20px; font-weight: normal;"
                                            valign="top">

                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" width="264"
                                              align="left" class="rnb-col-2 rnb-social-text-left"
                                              style="border-bottom:0;">

                                              <tbody>
                                                <tr>
                                                  <td valign="top">
                                                    <table cellpadding="0" border="0" align="left" cellspacing="0"
                                                      class="rnb-btn-col-content">
                                                      <tbody>
                                                        <tr>
                                                          <td valign="middle" align="left"
                                                            style="font-size:14px; font-family:'Montserrat','Arial',Helvetica,sans-serif; color:#888888; line-height: 16px"
                                                            class="rnb-text-center">
                                                            <div>Sekai Coffee<br>
                                                              9, Rue Bleue<br>
                                                              75009 PARIS<br>
                                                              i<a href="#"
                                                                style="text-decoration: underline; color: rgb(239, 83, 80);">magens@arte.com</a>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </th>
                                          <th ng-if="item.text.align=='left'" class="rnb-force-col rnb-social-width"
                                            valign="top" style="mso-padding-alt: 0 20px 0 0; padding-right: 15px;">

                                            <table border="0" valign="top" cellspacing="0" cellpadding="0" width="246"
                                              align="right" class="rnb-last-col-2">

                                              <tbody>
                                                <tr>
                                                  <td valign="top">
                                                    <table cellpadding="0" border="0" cellspacing="0"
                                                      class="rnb-social-align" style="float: right;" align="right">
                                                      <tbody>
                                                        <tr>
                                                          <td valign="middle" class="rnb-text-center"
                                                            ng-init="width=setSocialIconsBlockWidth(item)" width="165"
                                                            align="right">
                                                            <div class="rnb-social-center">
                                                              <table align="left"
                                                                style="float:left; display: inline-block" border="0"
                                                                cellpadding="0" cellspacing="0">
                                                                <tbody>
                                                                  <tr>
                                                                    <td
                                                                      style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;"
                                                                      align="left">
                                                                      <span style="color:#ffffff; font-weight:normal;">
                                                                        <img alt="Facebook" border="0" hspace="0"
                                                                          vspace="0" style="vertical-align:top;"
                                                                          target="_blank"
                                                                          src="https://img.mailinblue.com/new_images/rnb/theme2/rnb_ico_fb.png"></span>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </div>
                                                            <div class="rnb-social-center">
                                                              <table align="left"
                                                                style="float:left; display: inline-block" border="0"
                                                                cellpadding="0" cellspacing="0">
                                                                <tbody>
                                                                  <tr>
                                                                    <td
                                                                      style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;"
                                                                      align="left">
                                                                      <span style="color:#ffffff; font-weight:normal;">
                                                                        <img alt="Twitter" border="0" hspace="0"
                                                                          vspace="0" style="vertical-align:top;"
                                                                          target="_blank"
                                                                          src="https://img.mailinblue.com/new_images/rnb/theme2/rnb_ico_tw.png"></span>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </div>
                                                            <div class="rnb-social-center">
                                                              <table align="left"
                                                                style="float:left; display: inline-block" border="0"
                                                                cellpadding="0" cellspacing="0">
                                                                <tbody>
                                                                  <tr>
                                                                    <td
                                                                      style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;"
                                                                      align="left">
                                                                      <span style="color:#ffffff; font-weight:normal;">
                                                                        <img alt="LinkedIn" border="0" hspace="0"
                                                                          vspace="0" style="vertical-align:top;"
                                                                          target="_blank"
                                                                          src="https://img.mailinblue.com/new_images/rnb/theme2/rnb_ico_in.png"></span>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </div>
                                                            <div class="rnb-social-center">
                                                              <table align="left"
                                                                style="float:left; display: inline-block" border="0"
                                                                cellpadding="0" cellspacing="0">
                                                                <tbody>
                                                                  <tr>
                                                                    <td
                                                                      style="padding:0px 5px 5px 0px; mso-padding-alt: 0px 2px 5px 0px;"
                                                                      align="left">
                                                                      <span style="color:#ffffff; font-weight:normal;">
                                                                        <img alt="Instagram" border="0" hspace="0"
                                                                          vspace="0" style="vertical-align:top;"
                                                                          target="_blank"
                                                                          src="https://img.mailinblue.com/new_images/rnb/theme2/rnb_ico_ig.png"></span>
                                                                    </td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </div>
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </td>
                                                </tr>
                                              </tbody>
                                            </table>
                                          </th>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>

                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(249, 250, 252);">

                    <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0"
                      cellspacing="0" style="min-width:590px;" name="Layout_3" id="Layout_3">
                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" align="center" valign="top" bgcolor="#f9fafc"
                            style="min-width:590px; background-color: #f9fafc; text-align: center;">
                            <a href="#" name="Layout_3"></a>
                            <table width="590" class="rnb-container" cellpadding="0" border="0" align="center"
                              cellspacing="0" bgcolor="#f9fafc"
                              style="padding-right: 20px; padding-left: 20px; background-color: rgb(249, 250, 252);">
                              <tbody>
                                <tr>
                                  <td height="10" style="font-size:1px; line-height:1px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div
                                      style="font-size:14px; color:#888888; font-weight:normal; text-align:center; font-family:'Montserrat','Arial',Helvetica,sans-serif;">
                                      <div style="line-height:24px;">Este email foi enviado para ${user.email}</div>

                                      <div style="line-height:24px;">
                                        Você está recebendo este email porque você se cadastrou na plataforma
                                        da Imagens Arte
                                      </div>
                                    </div>
                                    <div style="display: block; text-align: center;">
                                      <span
                                        style="font-size:14px; font-weight:normal; display: inline-block; text-align:center; font-family:'Montserrat','Arial',Helvetica,sans-serif;">
                                        <a style="text-decoration:underline; color:#EF5350;font-size:14px;font-weight:normal;font-family:'Montserrat','Arial',Helvetica,sans-serif;"
                                          target="_blank" href="{{ unsubscribe }}">Descadastre-se aqui</a></span>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="10" style="font-size:1px; line-height:1px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td>
                                    <div style="text-align:center;">
                                      <div style="font-family:Arial, Helvetica, sans-serif;color:#888888;opacity:0.8">
                                        Sent by</div><a
                                        href="https://www.sendinblue.com/?utm_source=logo_mailin&amp;utm_campaign=14c9c680b61b8aa0f591a51367eabf9b&amp;utm_medium=email"
                                        target="_blank"><img border="0" hspace="0" vspace="0" width="129" height="40"
                                          alt="SendinBlue" style="margin:auto;"
                                          src="https://img.mailinblue.com/new_images/rnb/logo_nb_en.png"></a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="10" style="font-size:1px; line-height:1px; mso-hide: all;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </td>
              </tr>
              <tr>

                <td align="center" valign="top">

                  <div style="background-color: rgb(249, 250, 252);">

                    <table class="rnb-del-min-width rnb-tmpl-width" width="100%" cellpadding="0" border="0"
                      cellspacing="0" style="min-width:590px;" name="Layout_4" id="Layout_4">
                      <tbody>
                        <tr>
                          <td class="rnb-del-min-width" align="center" valign="top" style="min-width:590px;">
                            <a href="#" name="Layout_4"></a>
                            <table width="100%" cellpadding="0" border="0" align="center" cellspacing="0"
                              bgcolor="#f9fafc"
                              style="padding-right: 20px; padding-left: 20px; background-color: rgb(249, 250, 252);">
                              <tbody>
                                <tr>
                                  <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                </tr>
                                <tr>
                                  <td
                                    style="font-size:14px; color:#888888; font-weight:normal; text-align:center; font-family:'Montserrat','Arial',Helvetica,sans-serif;">
                                    <div>© 2021 Imagens Arte</div>
                                  </td>
                                </tr>
                                <tr>
                                  <td height="20" style="font-size:1px; line-height:20px; mso-hide: all;">&nbsp;</td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>

</html>`
}

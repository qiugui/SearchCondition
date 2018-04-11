using System.Web;
using System.Web.Optimization;

namespace SearchCondition
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/jquery-ui/jquery-ui.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // 使用要用于开发和学习的 Modernizr 的开发版本。然后，当你做好
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap/bootstrap.js",
                      "~/Scripts/bootstrap-menu/BootstrapMenu.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/mock").Include(
                      "~/Scripts/mock/mock.js"));

            bundles.Add(new ScriptBundle("~/bundles/vue").Include(
                      "~/Scripts/vue/vue.js"));

            bundles.Add(new ScriptBundle("~/bundles/zTree").Include(
                      "~/Scripts/zTree/jquery.ztree.all.js"));

            bundles.Add(new ScriptBundle("~/bundles/fileexplorer").Include(
                      "~/Scripts/fileexplorer/fileexplorer-common.js",
                      "~/Scripts/fileexplorer/fileexplorer-mock.js",
                      "~/Scripts/fileexplorer/fileexplorer-rightMenu.js",
                      "~/Scripts/fileexplorer/fileexplorer-fileAreaTree.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap/bootstrap.css",
                      "~/Content/bootstrap/bootstrap-theme.css",
                      "~/Content/jquery-ui/jquery-ui.css",
                      "~/Content/zTree/zTreeStyle/zTreeStyle.css",
                      "~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/fileexplorer-css").Include(
                      "~/Content/fileexplorer/fileexplorer-common.css",
                      "~/Content/fileexplorer/fileexplorer-filecontainer.css",
                      "~/Content/fileexplorer/fileexplorer-edittextmodal.css"));
        }
    }
}

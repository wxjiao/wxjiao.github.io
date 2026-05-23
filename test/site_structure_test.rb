require "minitest/autorun"

ROOT = File.expand_path("..", __dir__)

def read_site_file(path)
  File.read(File.join(ROOT, path))
end

class SiteStructureTest < Minitest::Test
  def test_homepage_uses_modern_profile_sections
    home = read_site_file("_pages/home.md")

    refute_includes home, 'id="carousel"'
    assert_includes home, "home-hero"
    assert_includes home, "research-areas"
    assert_includes home, "selected-publications"
    assert_includes home, "latest-news"
  end

  def test_homepage_raw_html_sections_disable_markdown_parsing
    home = read_site_file("_pages/home.md")
    section_lines = home.lines.grep(/<section\b/)

    refute_empty section_lines
    assert section_lines.all? { |line| line.include?('markdown="0"') },
           "All raw HTML sections in _pages/home.md must include markdown=\"0\" so kramdown does not render nested tags as code blocks."
  end

  def test_home_layout_is_single_content_flow
    layout = read_site_file("_layouts/homelay.html")

    refute_includes layout, "col-sm-8"
    refute_includes layout, "newsid"
    assert_includes layout, "home-page"
  end

  def test_spotlight_projects_are_data_driven
    assert File.exist?(File.join(ROOT, "_data/projects.yml"))

    include_file = read_site_file("_includes/spotlight-projects.html")
    assert_includes include_file, "site.data.projects"
    refute_includes include_file, "<style>"
  end

  def test_global_config_is_not_placeholder
    config = read_site_file("_config.yml")

    assert_includes config, "email: wenxiangjiaonju@gmail.com"
    assert_includes config, "url: \"https://wxjiao.github.io\""
    refute_includes config, "Write an awesome description"
    refute_includes config, "your-email@domain.com"
  end

  def test_footer_has_current_profile_information
    footer = read_site_file("_includes/footer.html")

    refute_includes footer, "Allan Lab"
    refute_includes footer, "Tencent AI Lab, Shenzhen"
    assert_includes footer, "Xiaohongshu"
    assert_includes footer, "Google Scholar"
  end
end

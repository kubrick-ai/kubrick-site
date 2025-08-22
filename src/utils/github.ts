interface SocialLink {
  url: string;
  label: string;
  icon: string;
}

export function extractGitHubUsername(
  socialLinks: SocialLink[]
): string | null {
  const githubLink = socialLinks.find(
    (link) => link.url.includes("github.com") && link.icon === "github"
  );

  if (!githubLink) return null;

  const match = githubLink.url.match(/github\.com\/([^/?#]+)/);
  return match ? match[1] : null;
}

export async function fetchGitHubAvatar(
  username: string
): Promise<string | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      console.warn(
        `Failed to fetch GitHub user data for ${username}: ${response.status}`
      );
      return null;
    }

    const userData = await response.json();
    return userData.avatar_url || null;
  } catch (error) {
    console.warn(`Error fetching GitHub avatar for ${username}:`, error);
    return null;
  }
}

export async function getGitHubAvatarFromSocialLinks(
  socialLinks: SocialLink[]
): Promise<string | null> {
  const username = extractGitHubUsername(socialLinks);
  if (!username) return null;

  return await fetchGitHubAvatar(username);
}


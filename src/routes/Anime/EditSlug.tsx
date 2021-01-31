import React, { ReactElement } from 'react';
import AnimeEdit from 'src/components/anime/AnimeEdit';
import { RouteSpinner } from '../../components/ui/Spinner';

// GraphQl
import { useFindAnimeBySlugQuery, FindAnimeBySlugQueryVariables } from 'src/types/graphql';

const EditSlug = ({ slug }: { slug: string }): ReactElement => {
  const findAnimeBySlug: FindAnimeBySlugQueryVariables = { slug: slug };
  const { data, error, loading } = useFindAnimeBySlugQuery({
    variables: findAnimeBySlug,
  });

  if (loading) return <RouteSpinner />;
  if (!data || !data.findAnimeBySlug || error) return <div>Error: {error}</div>;

  if (error) return <div>Error: {error}</div>;

  return <AnimeEdit anime={data.findAnimeBySlug} />;
};

export default EditSlug;

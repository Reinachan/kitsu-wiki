import React from 'react';
import gql from 'graphql-tag.macro';
import { useQuery } from 'react-apollo-hooks';
import AnimeEdit from '../../components/Anime/AnimeEdit';
import { RouteSpinner } from '../../components/ui/Spinner';
import animeFields from '../../fragments/animeFields';

const GET_ANIME = gql`
  query Anime($id: [String!]) {
    anime(id: $id) {
      ...animeFields
    }
  }
  ${animeFields}
`;

const Edit = ({ id }) => {
  const { data, error, loading } = useQuery(GET_ANIME, {
    variables: { id },
    suspend: false
  });

  if (loading) return <RouteSpinner />;
  if (error) return <div>Error: {error}</div>;

  const anime = data.anime.nodes[0];

  return (
    <div className="container mb-3">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <AnimeEdit anime={anime} />
        </div>
      </div>
    </div>
  );
};

export default Edit;
